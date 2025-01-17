# Portfolio Website Guide

This guide provides an overview of the portfolio website built with Next.js 14, React 18, and Tailwind CSS.

## Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── components/      # Reusable components
│   ├── contact/         # Contact page
│   ├── portfolio/       # Portfolio listing page
│   ├── project/        # Individual project page
│   ├── utils/          # Utility functions
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js (@react-three/fiber, @react-three/drei)
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Image Handling**: react-medium-image-zoom

## Key Features

1. Modern UI with Tailwind CSS
2. 3D graphics and animations
3. Responsive design
4. Contact form with EmailJS integration
5. Dynamic project pages
6. Image zoom functionality
7. Smooth animations with Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm run start
```

## Project Organization

- **Components**: Reusable UI components are stored in `src/app/components/`
- **Pages**: Each page is organized in its own directory under `src/app/`
- **Utilities**: Helper functions and constants are in `src/app/utils/`

## Development Guidelines

1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Keep components modular and reusable
4. Implement responsive design
5. Optimize images and assets
6. Follow Next.js 14 app router conventions

## Environment Variables

Make sure to set up your `.env` file with necessary environment variables:
- Email service credentials (EmailJS)
- Any other API keys or configuration

## Deployment

The project can be deployed to various platforms:
- Vercel (recommended for Next.js)
- Netlify
- Custom server

## Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Maintain consistent code formatting
4. Test thoroughly before submitting changes

## Project Details

### Core Components

1. **Layout System**
   - Root layout (`layout.tsx`) with metadata configuration
   - Custom font integration (Inter)
   - Page transitions using `TransitionProvider`
   - SEO optimization with detailed metadata

2. **Navigation**
   - Dynamic navbar component
   - Custom NavLink component for navigation
   - Smooth page transitions

3. **3D Elements**
   - Custom ProfileImage3D component
   - Three.js integration with React Three Fiber
   - Interactive 3D brain model
   - Canvas-based animations

4. **Project Showcase**
   - Dynamic project routing with `[id]` parameter
   - Detailed project cards with:
     - Project title and description
     - Technology stack
     - Feature list
     - Project screenshots
     - Live demo links
   - Image zoom functionality using react-medium-image-zoom
   - Motion animations with Framer Motion

### Featured Projects

1. **Visutation**
   - Sorting algorithm visualizer
   - Interactive animations
   - Speed control and step-by-step execution
   - Built with React.js and TypeScript

2. **NextJs eCommerce**
   - Full-featured eCommerce platform
   - Stripe payment integration
   - Responsive product catalog
   - Modern shopping experience

3. **Project Tracker**
   - Project management system
   - User role management
   - Analytics dashboard
   - Agency-focused features

### Performance Optimizations

1. **Image Optimization**
   - Next.js Image component for automatic optimization
   - Lazy loading with dynamic imports
   - Responsive images with appropriate sizing

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based code splitting
   - Lazy loading of 3D models and animations

3. **SEO**
   - Comprehensive metadata configuration
   - OpenGraph and Twitter card support
   - Robots configuration
   - Semantic HTML structure

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
