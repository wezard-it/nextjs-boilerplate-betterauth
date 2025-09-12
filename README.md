This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install all packages:

```bash
pnpm install
```

Initialize the Prism server:

```bash
pnpm dlx prisma generate
```

Run the development server:

```bash
pnpm dev
```

We use pnpm in webprojects.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(home)/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

We use [Shadcn/Ui](https://ui.shadcn.com/docs) as a reference for build the component libraries.

This is the folder structure to maintain across projects.

```bash
.
├── app
│   ├── (home)
│   │   └── page.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...all]
│   │   │       └── route.ts
│   │   └── og
│   │       └── route.tsx
│   ├── auth
│   │   ├── login
│   │   │   ├── components
│   │   │   │   └── logInForm.tsx
│   │   │   └── page.tsx
│   │   └── signup
│   │       ├── components
│   │       │   └── signUpForm.tsx
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── layout.tsx
│   └── profile
│       └── page.tsx
├── commitlint.config.cjs
├── components
│   ├── sign-in-oauth.tsx # for single components we use a tsx file under components
│   ├── sign-out-button.tsx
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── chart.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── sonner.tsx
├── components.json
├── config # all file of config should fall under this folder
│   ├── locale
│   │   ├── i18n.ts
│   │   └── index.ts
│   └── routes.tsx # all the routes of the application.
├── env.example # an example of what the .env file should look like
├── lib
│   ├── actions # should be atomized based on needs.
│   │   ├── sign-in-email.ts
│   │   └── sign-up-email.ts
│   ├── auth-client.ts # Better Auth authentication management file
│   ├── auth.ts # Better Auth database connection config.
│   ├── locale.ts
│   ├── utils.ts # general utils shared across application
│   └── validation.ts # Zod validation schema for forms
├── prisma 
│   ├── migrations
│   └── schema.prisma # configuration file that defines the database data models
├── public
│   ├── locales 
│   │   ├── en
│   │   │   └── translation.json
│   │   └── it
│   │       └── translation.json
│   ├── next.svg
│   └── vercel.svg
├── styles
│   └── globals.css
├── tailwind.config.ts
├── tsconfig.json
└── types
    ├── api.ts
    ├── auth.ts
    ├── next-auth.d.ts
    └── shared.ts
```

# Learn More

-   [Zod](https://zod.dev/)
-   [Better-Auth.js](https://better-auth.com/)
-   [Stripe](https://docs.stripe.com/)
-   [next-video](https://github.com/muxinc/next-video)
    Next video is a react component for adding video to your next.js application. It extends both the html video element and your Next app with features for automatic video optimization.
-   [DnD-kit](https://github.com/clauderic/dnd-kit)
    A drag and drop toolkit for react.
-   [Prisma](https://github.com/prisma/prisma)
    A ORM for app directly connected to db.
-   [Prismic](https://github.com/prismicio)
    A CMS for content-oriented app.
-   [Zustand](https://github.com/pmndrs/zustand)
    A Atomic state manager

to use this as a boilerplate run

```bash
create-next-app --example https://github.com/wezard-it/nextjs-boilerplate-betterauth.git

```
