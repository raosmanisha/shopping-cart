# Shopping Cart Example

This repository contains a production-ready shopping cart built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Redux Toolkit. The application demonstrates the following features:

- Product listing page
- Product detail page
- Add to cart functionality
- Cart page with quantity update and remove item
- Cart total calculation
- Persistent cart using `localStorage`
- Responsive UI powered by Tailwind CSS
- Loading and error states during data fetching
- Performance optimizations using `React.memo`

## Tech Stack

- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Redux Toolkit & React Redux

## Folder Structure

```
shopping-cart/
├── src/
│   ├── app/                # Next.js App Router pages and layout
│   │   ├── api/
│   │   │   └── products/route.ts  # Mock products API
│   │   ├── cart/           # Cart page
│   │   │   └── page.tsx
│   │   ├── product/        # Dynamic product detail
│   │   │   └── [id]/page.tsx
│   │   ├── globals.css     # Tailwind imports
│   │   ├── layout.tsx      # Root layout with Redux provider
│   │   ├── loading.tsx     # Global loading state
│   │   └── page.tsx        # Home/product listing
│   ├── components/         # Reusable UI components
│   │   ├── AddToCartButton.tsx
│   │   ├── CartItem.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductList.tsx
│   ├── hooks/              # Custom hooks
│   │   └── useCart.ts
│   ├── services/           # Business logic / API calls
│   │   └── productService.ts
│   ├── store/              # Redux store setup
│   │   ├── cartSlice.ts
│   │   └── store.ts
│   └── types/              # TypeScript type definitions
│       ├── cart.ts
│       └── product.ts
├── public/                 # Static assets (images, etc.)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
├── postcss.config.mjs
└── README.md
```

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- The product API is mocked using an internal `app/api` route and returns a hard-coded list of items.
- Cart state is managed via Redux Toolkit and persisted to `localStorage` through a simple subscription.
- Custom hooks and components keep UI and business logic separated for easy maintenance.

Enjoy exploring the sample shopping cart!

