This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Add env variables

First, create your `.env.local` file in the project root and add vars listed in `.env.template`.

### Run it

After that, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

### #1 Add comments

Add comments to the post page (/pages/posts/[slug]).

#### Requirements:

- Users can add, delete and edit comments.
- Users can react and reply to comments.
- Comments should be lazy loaded.
- Comments should have a counter.

### #2 Create Table of contents.

Add TOC (Table of Contents) to the post page sidebar (/pages/posts/[slug]).

#### Requirements:

- Move TOC from post body to the sidebar.
- TOC should be collapsable.
- TOC should include post headers up to 3 level.

### #3 Add post pagination

Add post pagination to the post page `/pages/posts/[slug]`.

#### Requirements:

- On the first visit only show a post snippet.
- Add "show more" button and fetch the rest of the post OR
- Split post into pages.

#### Bonus:

- Solve "Large Page Data" warning for `/posts/Blockchain-Powered-Smart-Lock`
