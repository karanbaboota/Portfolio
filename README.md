# Portfolio Website

A modern, Fastfolio-inspired portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Clean, modern design inspired by Fastfolio
- 📱 Fully responsive
- ⚡ Fast performance with Next.js static export
- 🎭 Smooth animations with Framer Motion
- 💬 AI chat input (ready for integration)
- 🎯 Navigation cards for easy access to sections

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

### Static Export (for GitHub Pages)

```bash
npm run build
```

This will create an `out` folder with static files ready to deploy.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to GitHub Pages

1. Build the static export:
```bash
npm run build
```

2. The `out` folder contains all static files
3. Push the `out` folder contents to your `gh-pages` branch or use GitHub Actions

### Deploy to Netlify

1. Build the static export:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

## Customization

### Update Profile Information

Edit `app/components/Hero.tsx` to update:
- Name
- Title
- Profile photo (add image to `public/` folder)

### Update Navigation Cards

Edit `app/components/NavCards.tsx` to modify:
- Card names
- Icons
- Links

### Change Colors

Edit `tailwind.config.js` to customize the accent color and theme.

### Add Profile Photo

1. Add your photo to `public/profile.jpg`
2. Update `Hero.tsx` to use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/profile.jpg"
  alt="Karan Baboota"
  width={320}
  height={400}
  className="rounded-3xl"
/>
```

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Background.tsx
│   │   ├── ChatInput.tsx
│   │   ├── Hero.tsx
│   │   └── NavCards.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── (add your images here)
├── next.config.js
├── tailwind.config.js
└── package.json
```

## License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js and Tailwind CSS
