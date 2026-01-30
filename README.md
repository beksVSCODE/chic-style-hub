# 👗 Chic Style Hub

**Modern Fashion E-Commerce Platform** built with cutting-edge web technologies for an elegant shopping experience.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Environment Variables](#-environment-variables)
- [Component Library](#-component-library)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🛍️ **Product Catalog** - Browse and explore fashion items with detailed descriptions
- 🔍 **Advanced Filtering** - Filter products by category, price, size, and more
- ⭐ **Customer Reviews** - View and read authentic customer reviews and ratings
- 💬 **Contact Form** - Get in touch with our team via integrated contact section
- 📱 **Responsive Design** - Seamless experience on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful, accessible components built with Shadcn UI
- 🌙 **Dark Mode** - Comfortable viewing in any lighting condition
- ⚡ **Lightning Fast** - Optimized performance with Vite build tool
- 🧪 **Type Safe** - Full TypeScript support for robust code
- 📊 **Google Sheets Integration** - Backend integration for data management

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library with hooks and functional components
- **TypeScript 5.8.3** - Static typing for JavaScript
- **React Router v6** - Client-side routing and navigation

### Build & Development
- **Vite 5.4.19** - Next-generation frontend tooling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS transformations and autoprefixing
- **ESLint 9** - Code quality and linting

### UI Components
- **Shadcn UI** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library

### Form & Validation
- **React Hook Form 7.61.1** - Performant form management
- **Zod 3.25.76** - TypeScript-first schema validation

### Additional Libraries
- **TanStack React Query 5.83.0** - Data fetching and caching
- **React Router DOM** - Routing functionality
- **Recharts** - Responsive charts and graphs
- **Sonner** - Toast notifications
- **date-fns** - Date manipulation

### Testing & Quality
- **Vitest 3.2.4** - Unit testing framework
- **@testing-library/react** - React component testing

---

## 📁 Project Structure

```
chic-style-hub/
├── src/
│   ├── components/              # React components
│   │   ├── ui/                 # Shadcn/Radix UI components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── HeroSection.tsx     # Hero banner
│   │   ├── CatalogSection.tsx  # Product catalog
│   │   ├── ProductCard.tsx     # Product card component
│   │   ├── ReviewsSection.tsx  # Customer reviews
│   │   ├── ContactSection.tsx  # Contact form
│   │   ├── NewArrivalsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingContactButton.tsx
│   │
│   ├── pages/                  # Page components
│   │   ├── Index.tsx           # Home page
│   │   └── NotFound.tsx        # 404 page
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-products.ts     # Product data hook
│   │   ├── use-contacts.ts     # Contact form hook
│   │   ├── use-mobile.tsx      # Mobile detection
│   │   └── use-toast.ts        # Toast notifications
│   │
│   ├── services/               # External services
│   │   └── sheetsService.ts    # Google Sheets integration
│   │
│   ├── data/                   # Static data
│   │   └── products.ts         # Product data
│   │
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Helper utilities
│   │
│   ├── test/                   # Test files
│   │   ├── setup.ts
│   │   └── example.test.ts
│   │
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts           # Vite type definitions
│
├── public/                     # Static assets
│   └── robots.txt
│
├── dist/                       # Build output (generated)
│
├── Configuration Files
│   ├── vite.config.ts          # Vite configuration
│   ├── vitest.config.ts        # Vitest configuration
│   ├── tsconfig.json           # TypeScript config
│   ├── tsconfig.app.json       # App-specific TS config
│   ├── tsconfig.node.json      # Node-specific TS config
│   ├── tailwind.config.ts      # Tailwind configuration
│   ├── postcss.config.js       # PostCSS configuration
│   ├── components.json         # Shadcn CLI config
│   ├── eslint.config.js        # ESLint configuration
│   ├── package.json            # Dependencies & scripts
│   └── package-lock.json       # Dependency lock file
│
├── Documentation
│   ├── README.md               # This file
│   ├── SETUP_GUIDE.md          # Setup instructions
│   ├── ARCHITECTURE.md         # Architecture overview
│   ├── GOOGLE_SHEETS_INTEGRATION.md
│   ├── DEPLOYMENT_CHECKLIST.md
│   └── ... (additional docs)
│
├── .gitignore                  # Git ignore rules
├── .env.local.example          # Environment variables template
└── netlify.toml                # Netlify configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 16 or higher (recommended 18+)
- **npm** 7+ or **yarn** 1.22+
- **Git** for version control

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/chic-style-hub.git
cd chic-style-hub
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Configure Environment Variables

Create `.env.local` in the root directory:

```env
# Copy from .env.local.example
VITE_API_URL=http://localhost:3000
VITE_SHEETS_API_KEY=your_google_sheets_api_key
```

### Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at **`http://localhost:5173`**

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (optimized) |
| `npm run build:dev` | Build with development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm test` | Run tests (Vitest) |
| `npm test:watch` | Run tests in watch mode |

### Hot Module Replacement (HMR)

Changes to components are instantly reflected in the browser without full page reload during development.

### Type Checking

TypeScript provides full type safety. Check types with:

```bash
npx tsc --noEmit
```

### Code Linting

Lint your code and fix issues:

```bash
npm run lint
# with auto-fix:
npm run lint -- --fix
```

---

## 📦 Building for Production

### Create Production Build

```bash
npm run build
```

This generates an optimized build in the `dist/` directory:
- ✅ Minified JavaScript and CSS
- ✅ Code splitting for optimal loading
- ✅ Asset optimization
- ✅ Source maps for debugging

### Preview Build Locally

```bash
npm run preview
```

### Deploy to Netlify

This project includes `netlify.toml` configuration. Connect your GitHub repo to Netlify for automatic deployments.

---

## 🔧 Environment Variables

Create `.env.local` based on `.env.local.example`:

```env
# API Configuration
VITE_API_URL=https://api.example.com

# Google Sheets Integration
VITE_SHEETS_API_KEY=your_api_key_here
VITE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id

# Optional: Analytics, etc.
VITE_GA_ID=google_analytics_id
```

**Security Note:** Never commit `.env.local` to version control. Use `.env.local.example` as a template.

---

## 🎨 Component Library

### Using Shadcn/UI Components

Add new components with the Shadcn CLI:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

### Available Components

Pre-installed components in `src/components/ui/`:
- Button, Card, Dialog, Drawer
- Form, Input, Textarea, Select
- Tabs, Accordion, Collapsible
- Pagination, Breadcrumb, Badge
- Avatar, Tooltip, Popover
- And many more...

---

## 📝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- Follow ESLint rules
- Use TypeScript for type safety
- Write descriptive commit messages
- Add tests for new features

---

## 🐛 Troubleshooting

### Port 5173 Already in Use

```bash
# Use a different port
npm run dev -- --port 3000
```

### Module Not Found Error

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Vite Cache Issues

```bash
rm -rf .vite
npm run dev
```

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For questions or support, please reach out through:
- **GitHub Issues** - Report bugs or request features
- **Email** - contact@chicstylehub.com
- **Website** - www.chicstylehub.com

---

## 🙏 Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Primitives
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - JavaScript library

---

**Made with ❤️ by the Chic Style Hub Team**
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
