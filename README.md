# Portfolio

This portfolio now sends contact form messages through an SMTP backend.

## Setup

1. Install dependencies:

	npm install

2. Copy `.env.example` to `.env` and fill in your SMTP values:

	PORT=3000
	SMTP_HOST=smtp.gmail.com
	SMTP_PORT=465
	SMTP_SECURE=true
	SMTP_USER=yourgmail@gmail.com
	SMTP_PASS=your_16_char_gmail_app_password
	MAIL_TO=your-receiving-email@example.com
	MAIL_FROM="Portfolio Contact <yourgmail@gmail.com>"

3. Start the server:

	npm start

4. Open `http://localhost:3000`.

## Notes

- Never put SMTP credentials in frontend files.
- If using Gmail, create and use an App Password.

## Deploy on Railway

1. Push this project to GitHub.
2. Go to Railway Dashboard and create a **New Project**.
3. Choose **Deploy from GitHub repo** and select this repository.
4. Open your service in Railway, then go to **Variables**.
5. Add these variables:
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_SECURE`
	- `SMTP_USER`
	- `SMTP_PASS`
	- `MAIL_TO`
	- `MAIL_FROM`
6. Trigger a deploy (or wait for auto-deploy).
7. Open **Settings** → **Networking** and generate a public domain.
8. Open the generated URL and test the contact form.

### About "Free Domain"

- Fully free custom domains are limited/unreliable.
- The best free option is the hosting subdomain (`*.up.railway.app`, `*.onrender.com`, `*.netlify.app`, `*.vercel.app`).
- If you want a custom domain (like `.com`), you usually need to buy the domain, then connect it to your host.