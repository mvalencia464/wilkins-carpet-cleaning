# TinaCMS Integration Guide

## Overview
This project has been successfully integrated with TinaCMS to enable editable content management. You can now edit your website content through a user-friendly admin interface.

## TinaCMS Setup

### Environment Variables
The following environment variables are configured in `.env`:

```
TINA_CLIENT_ID=7f0541cf-76a8-4193-ab54-da65437b3641
TINA_TOKEN=1ae312568159920fafbdd2c2f725fc719768b103
VITE_TINA_CLIENT_ID=7f0541cf-76a8-4193-ab54-da65437b3641
TINA_PUBLIC_IS_LOCAL=true
```

### Content Structure
Content is organized in the `content/` directory:

- `content/hero/main.md` - Hero section content
- `content/about/main.md` - About section content
- `content/services/` - Service offerings
- `content/testimonials/` - Customer testimonials
- `content/blog/` - Blog posts

### Available Scripts

- `npm run dev` - Start development server with TinaCMS
- `npm run build` - Build for production with TinaCMS
- `npm run build:local` - Build for local/development environment
- `npm run tina:dev` - Start TinaCMS development server only
- `npm run tina:build` - Build TinaCMS only

## Accessing the CMS

### Local Development
1. Run `npm run dev`
2. Open your browser to `http://localhost:5173`
3. Access the admin interface at `http://localhost:5173/admin/index.html`

### Content Management
You can edit the following content types through the TinaCMS admin:

1. **Hero Section** - Main page title, subtitle, phone number, and service areas
2. **Services** - Service titles, descriptions, icons, and features
3. **Testimonials** - Customer reviews with ratings and locations
4. **About Section** - Company information and statistics
5. **Blog Posts** - Articles and blog content

## Deployment with Bolt Hosting

### For Production Deployment:
1. Ensure your repository is connected to TinaCloud
2. Push your changes to the main branch
3. Use `npm run build` for production builds
4. Deploy the `dist/` folder to Bolt hosting

### For Development/Testing:
1. Use `npm run build:local` for local builds
2. This will work without requiring TinaCloud connection

## Content Editing Workflow

1. **Local Development**: Edit content through the admin interface at `/admin/index.html`
2. **Content Changes**: All changes are saved to markdown files in the `content/` directory
3. **Version Control**: Commit content changes to your repository
4. **Deployment**: Deploy to production using Bolt hosting

## Technical Details

### Components Updated
- `Hero.tsx` - Now uses TinaCMS data with fallback to static content
- `Services.tsx` - Displays services from TinaCMS with icon mapping
- `Testimonials.tsx` - Shows testimonials from TinaCMS
- `About.tsx` - Uses TinaCMS for about section content
- `BlogPost.tsx` - Renders blog posts from TinaCMS

### Hooks
- `useTinaHero()` - Fetches hero section data
- `useTinaServices()` - Fetches services data
- `useTinaTestimonials()` - Fetches testimonials
- `useTinaAbout()` - Fetches about section data
- `useTinaBlog()` - Fetches blog posts

### Fallback System
All components include fallback to static content in `src/utils/content.ts` if TinaCMS data is not available, ensuring the site always works.

## Next Steps

1. **Content Population**: Use the admin interface to populate your content
2. **Customization**: Modify the TinaCMS schema in `tina/config.ts` to add new fields
3. **Styling**: Customize the admin interface appearance if needed
4. **Deployment**: Deploy to Bolt hosting for production use

## Support

For TinaCMS documentation and support:
- [TinaCMS Documentation](https://tina.io/docs/)
- [TinaCMS GitHub](https://github.com/tinacms/tinacms)

Your TinaCMS project ID: `7f0541cf-76a8-4193-ab54-da65437b3641`
