const nodemailer = require('nodemailer');

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO'];

function isMailerConfigured() {
    return requiredEnv.every((envName) => Boolean(process.env[envName]));
}

function createTransporter() {
    const smtpPort = Number(process.env.SMTP_PORT);
    const secure = String(process.env.SMTP_SECURE).toLowerCase() === 'true';

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
}

function parseBody(req) {
    if (req.body && typeof req.body === 'object') {
        return req.body;
    }

    if (typeof req.body === 'string') {
        try {
            return JSON.parse(req.body);
        } catch (error) {
            return null;
        }
    }

    return null;
}

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }

    const body = parseBody(req) || {};
    const { name, email, message } = body;

    if (!name || !email || !message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Please fill in all fields.' }));
    }

    if (!isMailerConfigured()) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'SMTP is not configured. Please check server environment variables.' }));
    }

    const senderAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
    const emailBody = [
        'You received a new portfolio contact message.',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message
    ].join('\n');

    try {
        const transporter = createTransporter();

        await transporter.sendMail({
            from: senderAddress,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: `New portfolio inquiry from ${name}`,
            text: emailBody
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ ok: true }));
    } catch (error) {
        console.error('SMTP send error:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        if (error && error.code === 'EAUTH' && Number(error.responseCode) === 535) {
            return res.end(JSON.stringify({
                error: 'SMTP login failed. If you use Gmail, enable 2-Step Verification and use a Gmail App Password.'
            }));
        }
        return res.end(JSON.stringify({ error: 'Sorry, something went wrong while sending your message.' }));
    }
};
