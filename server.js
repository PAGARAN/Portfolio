require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const basePort = Number(process.env.PORT) || 3000;
const maxPortRetries = 10;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

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

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    if (!isMailerConfigured()) {
        return res.status(500).json({ error: 'SMTP is not configured. Please check server environment variables.' });
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

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('SMTP send error:', error);
        if (error && error.code === 'EAUTH' && Number(error.responseCode) === 535) {
            return res.status(500).json({
                error: 'SMTP login failed. If you use Gmail, enable 2-Step Verification and use a Gmail App Password.'
            });
        }
        return res.status(500).json({ error: 'Sorry, something went wrong while sending your message.' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

function startServer(startPort, attemptsLeft) {
    const server = app.listen(startPort, () => {
        console.log(`Portfolio server running on http://localhost:${startPort}`);
    });

    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE' && attemptsLeft > 0) {
            const nextPort = startPort + 1;
            console.warn(`Port ${startPort} is in use. Retrying on ${nextPort}...`);
            startServer(nextPort, attemptsLeft - 1);
            return;
        }

        throw error;
    });
}

startServer(basePort, maxPortRetries);
