# Nuxt 3 Starter

nuxt3 starter with tailwindcss, prisma, vueuse, formkit, iconify;

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

Make sure to initialize prisma:

```bash
npx prisma migrate dev --name init
```

create .env file:

```
JWT_SECRET
JWT_EXP
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
