# KSU Connect

A production-oriented Next.js App Router foundation for KSU Connect: responsive web app, persistent top-right notifications/announcements/settings controls, My Campus hub, marketplace, events, feedback, health endpoint, and PostgreSQL/Prisma data model.

## Run
1. `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and `AUTH_SECRET`.
3. `npx prisma generate`
4. `npx prisma migrate dev --name init` (when a PostgreSQL database is available)
5. `npm run dev`

## Production integrations
The UI and API structure are ready for real authentication, PostgreSQL persistence, cloud uploads, M-PESA/payment processing, orders, ratings, announcements, notifications, and feedback workflows. Those live capabilities require the corresponding provider credentials, database, webhook URLs and security configuration; this package does not pretend those external accounts are already connected.
