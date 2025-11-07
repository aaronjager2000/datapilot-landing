# DataPilot Landing Page

A React-based landing page for DataPilot, an enterprise-grade data analytics platform. This landing page is built using React, Vite, and maintains the original design and styling from the template.

## Features

- **React-based architecture** - Modern React components with hooks
- **Responsive design** - Fully responsive layout matching the original template
- **Smooth scrolling** - Navigation with smooth scroll behavior
- **Interactive components** - Pricing toggle, carousels, and form handling
- **DataPilot branding** - Customized content for DataPilot platform

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
datapilot-landing/
├── public/
│   └── assets/          # Static assets (images, CSS, fonts)
│       ├── images/
│       ├── css/
│       ├── fonts/
│       └── js/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroScreenshots.jsx
│   │   ├── Features.jsx
│   │   ├── Process.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Clients.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Components

### Header

Navigation bar with smooth scrolling to sections and mobile menu toggle.

### Hero

Hero section with email signup form and call-to-action.

### Features

Two feature sections showcasing DataPilot capabilities:

- AI-powered insights
- Interactive dashboards
- Enterprise security
- Data management
- External integrations

### Process

Three-step process explaining how DataPilot works.

### Pricing

Pricing table with monthly/yearly toggle and three plans:

- Starter (Free)
- Professional ($99/mo)
- Enterprise ($299/mo)

### Testimonials

Customer testimonials carousel with avatar navigation.

### Clients

Client logos carousel.

### CTA

Call-to-action section with link back to hero.

### Footer

Footer with contact information and navigation links.

## Customization

### Updating Content

Edit the component files in `src/components/` to update text, images, or links.

### Styling

The original CSS files are preserved in `public/assets/css/`. Modify these files or add custom styles in `src/index.css`.

### Images

Replace images in `public/assets/images/` with your own. Update image paths in components if needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **jQuery** - For carousel functionality (loaded via CDN)
- **Owl Carousel** - For testimonials and clients carousels
- **Bootstrap** - CSS framework (included in vendor.css)

## License

This project is created for DataPilot. The original template design is preserved with DataPilot-specific content.

## Support

For issues or questions, contact:

- Email: support@datapilot.com
- Sales: sales@datapilot.com
