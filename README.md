# Video Background Removal Frontend

A modern, beautiful frontend website for the Video Background Removal tool powered by Hugging Face.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Dark mode support
- Links directly to Hugging Face deployment
- Beautiful landing page with features showcase

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This frontend can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Project Structure

```
frontend/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Customization

### Update Hugging Face URL

Edit `src/app/page.tsx` and replace all instances of:
```
https://huggingface.co/spaces/yasuo7/Background_remover
```
with your Hugging Face space URL.

### Change Colors and Styling

Modify `tailwind.config.js` and `src/app/globals.css` to customize the theme.

## License

Apache 2.0
