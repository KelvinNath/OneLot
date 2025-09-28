# 🚗 OneLot - Dealership Management Platform

A modern, responsive web application built with Next.js 14+ for dealership management solutions. OneLot provides working capital loans and digital tools to help car dealerships grow and thrive.

![OneLot Logo](public/assets/header/logo.webp)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development Guidelines](#-development-guidelines)
- [Available Scripts](#-available-scripts)
- [Testing](#-testing)
- [Code Quality](#-code-quality)
- [Error Monitoring](#-error-monitoring)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## ✨ Features

- **🏠 Hero Section** - Compelling landing page with layered backgrounds
- **⚡ Feature Showcase** - Highlight key services and benefits
- **💰 Financing Information** - Detailed loan and financing solutions
- **🏢 Dealership Management** - Digital tools and platform features
- **❓ FAQ Section** - Interactive accordion with smooth animations
- **👥 Customer Testimonials** - Social proof with navigation controls
- **📱 Stay Connected** - Social media integration with carousel
- **🚀 Call-to-Action** - Get started section for conversions
- **📱 Fully Responsive** - Mobile-first design approach
- **♿ Accessible** - WCAG compliant with proper semantic HTML

## 🛠 Tech Stack

### Core Technologies

- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### Development Tools

- **[Prettier](https://prettier.io/)** - Code formatting
- **[ESLint](https://eslint.org/)** - Code linting

### Icons & Assets

- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **WebP Images** - Optimized image format
- **Next.js Image** - Automatic image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd onelot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
onelot/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   └── favicon.ico              # Site icon
│
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── hero/               # Landing section
│   │   ├── feature/            # Features showcase
│   │   ├── financing/          # Financing info
│   │   ├── dealership/         # Dealership management
│   │   ├── whyOnelot/          # Why choose OneLot
│   │   ├── testimonials/       # Customer testimonials
│   │   ├── stayconnected/      # Social media & carousel
│   │   ├── FAQ/                # Frequently asked questions
│   │   └── getting-started/    # Call-to-action
│   │
│   ├── shared/                  # Shared components
│   │   ├── header/             # Navigation header
│   │   └── footer/             # Site footer
│   │
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx          # Button component
│       ├── Card.tsx            # Card component
│
│
├── public/                      # Static assets
│   └── assets/                  # Images and media
│       ├── header/             # Logo and branding
│       ├── hero/               # Hero section images
│       ├── Financing/          # Financing images
│       ├── Dealership/         # Dealership images
│       ├── StayConnected/      # Social media images
│       └── Testimonials/       # Avatar images
│
# Configuration Files
├── .gitignore                   # Git ignore rules
├── .prettierrc                  # Prettier configuration
├── .prettierignore             # Prettier ignore rules
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
│
# Documentation & Rules
├── cursorrules.md              # Development guidelines
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎯 Development Guidelines

### Architecture Principles

- **SSG First** - Static Site Generation for optimal performance
- **Mobile-First** - Responsive design starting with mobile
- **Component Composition** - Reusable, modular components
- **Type Safety** - Full TypeScript coverage
- **Performance Optimized** - Image optimization, code splitting

### Component Structure

```typescript
// Section components follow this pattern:
components/sections/[section-name]/
├── [SectionName].tsx           # Main section component
├── [SectionName]Content.tsx    # Content component
├── [SectionName]Image.tsx      # Image component (if applicable)
├── [section-name]-data.ts      # Static data
└── __tests__/                  # Component tests
```

### Data Management

- **Static Data Files** - All content in separate `*-data.ts` files
- **TypeScript Interfaces** - Proper type definitions
- **No API Calls** - Pure static content for SSG optimization

### Styling Guidelines

- **Tailwind CSS** - Utility-first approach
- **Design System** - Consistent spacing, colors, typography
- **Pre-computed Styles** - Performance optimization
- **Mobile-First** - Breakpoint-based responsive design

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run type-check   # Run TypeScript type checking
```

## 🔍 Code Quality

### ESLint Configuration

- **Next.js Rules** - Core web vitals and TypeScript
- **Prettier Integration** - Automatic formatting
- **Custom Rules** - Project-specific standards

### Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables

Set these in your deployment platform:

- `NODE_ENV=production`

### Build Process

1. **Type Checking** - TypeScript validation
2. **Linting** - Code quality checks
3. **Building** - Next.js production build
4. **Deployment** - Static generation and deployment
