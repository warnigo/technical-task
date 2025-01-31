<div align="center">
  <h1><samp>Webfolio</samp></h1>
  <samp>Showcasing my coding skills and projects with a sleek, modern design.<br /> Built using the latest web technologies to demonstrate my expertise and creativity</samp>
</div>

## Stack technologies

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Small, fast, and scalable bearbones state management solution
- [Shadcn UI](https://ui.shadcn.com) - As ready-made UI components
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with
- [React Query](https://tanstack.com/query) - Automatically caches data from your queries, reducing the need for redundant network requests and improving application performance.
- [Tailwindcss](https://tailwindcss.com) - For styles
- [Nextjs](https://Nextjs.org/) - framework for SSR

> [!IMPORTANT]
> This code structure was created using FSD (Feature-Sliced Design). Please read the FSD documentation before making any changes. Tailwind CSS and shadcn-ui are used for UI components. Define any CSS units such as px, rem, etc., in globals.css. React Query is used for API integration.

## Basic requirements for the project

> [!NOTE]
> Version Node +v20\*

## For Developers

```bash
npm install
# and
npm run dev
# or
pnpm install
# and
pnpm dev
# or
yarn install
# and
yarn dev
```

Run the project at [localhost:3000](http://localhost:3000)

> [!NOTE]
> You need to create .env.development following the example of .env.example so that all parameters are

## Code Review

    1) If the code is not ready, then mark your PR as “Draft” with the “Mark as draft” button
    2) Considers Architectural, Structural and other agreements on the design of PR to be critical and for this is not passed further than PR
    3) The remaining comments are purely advisory in nature and are not a blocker for PR
    4) Any controversial issue is discussed by the team and if there is no violation of points 1-2, then this dispute is not blocked!

## ☝️ - IMPORTANT:

> - To type everything and anything that is possible is not to use ANY!
> - any enemy! - always discuss exceptions with the team!
> - avoid console.log if possible, in extreme cases console.error console.warn
> - mutate values ​​outside the mobx store (use exclusively actions from the mobx store for such things.)
