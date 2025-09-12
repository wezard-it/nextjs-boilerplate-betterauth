This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

We use pnpm in webprojects.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(dashboard)/(home)/page.tsx`. The page auto-updates as you edit the file.

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
│   ├── (dashboard)
│   │   ├── (home)
│   │   │   └── page.tsx
│   │   └── profile
│   │       └── page.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...all]
│   │   │       └── route.ts
│   │   └── og
│   │       └── route.tsx
│   ├── auth
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   ├── favicon.ico
│   └── layout.tsx
├── commitlint.config.cjs
├── components
│   ├── logInForm.tsx
│   ├── sign-in-outh.tsx
│   ├── sign-out-button.tsx
│   ├── signUpForm.tsx
│   └── ui/
├── components.json
├── config
│   ├── locale
│   │   ├── i18n.ts
│   │   └── index.ts
│   └── routes.tsx
├── lib
│   ├── actions
│   │   ├── sign-in-email.ts
│   │   └── sign-up-email.ts
│   ├── auth-client.ts
│   ├── auth.ts
│   ├── locale.ts
│   ├── utils.ts
│   └── validation.ts
├── prisma
│   └── schema.prisma
├── public
│   ├── locales
│   │   ├── en
│   │   └── it
│   ├── next.svg
│   └── vercel.svg
├── styles
│   └── globals.css
└── types/
```

# Useful docs && repo

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
create-next-app --example https://github.com/wezard-it/nextjs-boilerplate

```
