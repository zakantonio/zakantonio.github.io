# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Light/dark mode support
- ⚡️ Fast and optimized performance
- 🔧 Built with modern technologies
- 🎯 SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Add any environment variables here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page component
├── components/          # React components
│   └── ui/             # UI components
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/            # Global styles
```

## Customization

1. Update the profile information in `app/page.tsx`
2. Replace `/public/profile.jpg` with your profile picture
3. Modify the theme colors in `app/globals.css`
4. Add or remove sections as needed

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 