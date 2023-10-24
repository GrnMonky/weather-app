This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployed on Vercel at: https://weather-app-delta-orcin.vercel.app

**How I would enhance it:**

- **Functionality and UI Review:** Initially, I focused on functionality. The next step would involve consulting with the client or team lead to ensure that the UI design in the mock-up aligns precisely with their vision, rather than being just a quick sketch. I usually like to do this before dedicating a significant amount of time to strive for an exact match with the mock-up.
- **Implement a State Manager:** While the current version doesn't seem to require a state manager, I would consider adding one. Depending on the client's expansion plans for the app, it may be beneficial to move elements like the searched location into a global state manager like Redux for better scalability and manageability.
- **Introduce Routing:** Presently, the application is designed as a single-page app, even though the designs resemble a two-page structure. Since both pages have very similar UI, aside from some component switching, I prefer to switch the components rather than adding the unnecessary overhead of a router. However, a router would be needed if the client intends to expand the app beyond these two pages.
- **Enhance Error Handling:** Given the API's capability to accommodate various search types, I would discuss error handling with the client. Questions to consider include how error messages should be presented: Should an error message pop up while preserving the existing content, or should it clear the existing content? Should users be limited to a dropdown menu of locations? As of now, I've checked to make sure the app doesn't crash.
- **Adding Multiple Languages:** Currently, the app has hard-coded English strings. Although it wasn't specified in the design requirements, adding and testing multiple languages in the UI would be a valuable addition.
