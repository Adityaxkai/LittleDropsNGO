# HopeBridge - NGO Website

A professional, modern, fully responsive NGO website built with Next.js 14, TypeScript, TailwindCSS, and shadcn/ui components.

## 🚀 Features

### Pages & Sections
- **Home Page**: Hero section with mission statement and prominent CTAs
- **About Us**: NGO story, mission, vision, values, and impact stats
- **Programs**: Detailed information about initiatives and projects
- **Get Involved**: Volunteer opportunities and partnership options
- **Donate**: Interactive donation form with suggested tiers
- **Contact**: Contact form with office information and map

### Shared Components
- **Responsive Navbar**: Logo, navigation links, mobile menu
- **Footer**: NGO info, quick links, social media, newsletter signup
- **CTA Sections**: Reusable call-to-action components
- **Testimonials**: Carousel of stories and testimonials
- **Impact Counters**: Animated statistics display
- **Newsletter Signup**: Email capture form

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **shadcn/ui** components for consistent UI
- **Framer Motion** for animations
- **Responsive Design** for all devices
- **Accessibility** (a11y) optimized
- **SEO** optimized with proper metadata

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ngo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── get-involved/      # Get Involved page
│   ├── donate/            # Donate page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx     # Navigation bar
│   │   ├── footer.tsx     # Footer
│   │   └── main-layout.tsx # Main layout wrapper
│   ├── shared/            # Shared components
│   │   ├── cta-section.tsx # Call-to-action sections
│   │   ├── impact-counters.tsx # Impact statistics
│   │   └── testimonials.tsx # Testimonials carousel
│   └── ui/                # shadcn/ui components
└── lib/                   # Utility functions
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Accent**: Yellow (#eab308)
- **Success**: Green (#16a34a)
- **Warning**: Orange (#ea580c)
- **Error**: Red (#dc2626)

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Monospace**: JetBrains Mono

### Spacing
- Consistent padding: `px-4 md:px-12`
- Section spacing: `py-16`
- Component spacing: `space-y-4`, `space-y-6`, `space-y-8`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Customization

### Content
- Update content in the respective page components
- Modify the NGO name, mission, and contact information
- Replace placeholder images with actual photos

### Styling
- Customize colors in `tailwind.config.js`
- Modify component styles in individual component files
- Update global styles in `src/app/globals.css`

### Components
- Add new components in `src/components/`
- Extend existing components as needed
- Create new pages in `src/app/`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Components
1. Create component file in appropriate directory
2. Export component as default or named export
3. Import and use in pages or other components

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Use `MainLayout` component for consistent structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@hopebridge.org
- Phone: +1 (555) 123-4567
- Website: https://hopebridge.org

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Lucide](https://lucide.dev/) for the icons
- [Framer Motion](https://www.framer.com/motion/) for animations

---

Built with ❤️ for making the world a better place.
