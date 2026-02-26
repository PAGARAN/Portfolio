# Portfolio

This portfolio now sends contact form messages through an SMTP backend.

## Setup

1. Install dependencies:

	npm install

2. Copy `.env.example` to `.env` and fill in your SMTP values:

	PORT=3000
	SMTP_HOST=smtp.gmail.com
	SMTP_PORT=587
	SMTP_SECURE=false
	SMTP_USER=your_smtp_username
	SMTP_PASS=your_smtp_password_or_app_password
	MAIL_TO=your-receiving-email@example.com
	MAIL_FROM="Portfolio Contact <no-reply@yourdomain.com>"

3. Start the server:

	npm start

4. Open `http://localhost:3000`.

## Notes

- Never put SMTP credentials in frontend files.
- If using Gmail, create and use an App Password.

## Publish Online (Free)

You can publish this project for free on Render and get a free URL like:

https://your-app-name.onrender.com

### Steps (Render)

1. Push this project to GitHub.
2. Go to Render Dashboard and choose **New +** → **Blueprint**.
3. Select your GitHub repo (Render will read `render.yaml`).
4. In Render Environment Variables, add:
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_SECURE`
	- `SMTP_USER`
	- `SMTP_PASS`
	- `MAIL_TO`
	- `MAIL_FROM`
5. Deploy. Render will build and start your app automatically.
6. Open your `onrender.com` URL and test the contact form.

### About "Free Domain"

- Fully free custom domains are limited/unreliable.
- The best free option is the hosting subdomain (`*.onrender.com`, `*.netlify.app`, `*.vercel.app`).
- If you want a custom domain (like `.com`), you usually need to buy the domain, then connect it to Render.