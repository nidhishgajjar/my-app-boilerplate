# Boilerplate

Boilerplate Next.js project with Clerk, Shacdcn, NextUI, Supabase setup

## Prerequisites
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Installation

First, install the project dependencies:

```bash
npm i
```

Then, install the latest version of Clerk:

```bash
npm install @clerk/nextjs@latest clerk@latest
```

### 2. Environment Setup

Create a `.env.local` file in the root directory of your project.

You'll need to get the following keys from your [Clerk Dashboard](https://dashboard.clerk.dev/):
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
```

### 3. Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Features
- Next.js framework
- Clerk authentication
- Environment variable configuration

## Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
