# NEXTJS-AUTH-PRISMA-BOILERPLATE

## Requirements 

1. Prisma-DB (here we used postgresql)
2. SMPT mail credentials for Next-Auth Mail-Provider (you can configure a different provider if needed)

## Preparation

Create a `.env` file according to the content of `.env-example`

## Getting Started

Start your Database server and run:

```bash
npx prisma migrate
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Change the **role** flag in users table to **ADMIN** for gaining access to user management.

## Github Provider

Create your OAuth App under [Github Developer settings](https://github.com/settings/developers).

Use `http://localhost:3000/api/auth/callback/github` as callback URL.

Copy your **CLIEND ID** and **CLIENT SECRET** to your `.env` file.


## Good to know

Read more information on the following pages:

- [Next.js - ReactFramework](https://nextjs.org/)
- [NextAuth.js - Authentification for Next.js](https://next-auth.js.org/)
- [Prisma - Next-generation Node.js and TypeScript ORM](https://www.prisma.io/)
- [Nodemailer - Easy email sending with Node.js](https://nodemailer.com/about/)
- [TailwindCSS - Rapidly build modern websites without ever leaving your HTML](https://tailwindcss.com/)

## LICENSE

This project ist licensed under the MIT-License. 

Please be aware, that used dependencies are licensed under different licenses!