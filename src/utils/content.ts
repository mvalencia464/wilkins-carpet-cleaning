// Static content utilities for now - will be replaced with TinaCMS later

export interface HeroContent {
  title: string;
  subtitle: string;
  phone: string;
  serviceAreas: string;
  cta: {
    text: string;
    phone: string;
  };
}

export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: { feature: string }[];
}

export interface TestimonialContent {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
}

export interface AboutContent {
  title: string;
  content: string;
  stats: { number: string; label: string }[];
}

export interface BlogContent {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  body: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  ctaTitle: string;
  ctaSubtitle: string;
  rating: string;
}

export interface FooterContent {
  companyName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  serviceAreas: string;
  ownerInfo: string;
  services: { service: string }[];
  credentials: { credential: string }[];
}

export interface SiteSettingsContent {
  siteName: string;
  siteDescription: string;
  primaryPhone: string;
  primaryEmail: string;
  businessAddress: string;
  businessCity: string;
  logoPath: string;
}

// Static content data - this will be replaced with TinaCMS data
export const heroContent: HeroContent = {
  title: "Wilkins Carpet Cleaning - THE BEST in Rocky Mount, Wilson, Tarboro",
  subtitle: "Award-winning carpet cleaning service serving Rocky Mount, Wilson, Tarboro & surrounding areas for 20+ years. Professional steam cleaning, upholstery, tile & grout.",
  phone: "252-937-3276",
  serviceAreas: "Rocky Mount, Wilson, Tarboro & Eastern NC",
  cta: {
    text: "Call (252) 937-3276",
    phone: "252-937-3276"
  }
};

export const servicesContent: ServiceContent[] = [
  {
    id: "carpet-cleaning",
    title: "Professional Carpet Cleaning",
    description: "Deep steam cleaning that removes dirt, stains, and allergens from your carpets",
    icon: "Sparkles",
    features: [
      { feature: "12-step deep cleaning process" },
      { feature: "Pet stain and odor removal" },
      { feature: "Scotchgard protection available" },
      { feature: "Fast drying technology" }
    ]
  },
  {
    id: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    description: "Professional cleaning for sofas, chairs, and other upholstered furniture",
    icon: "Armchair",
    features: [
      { feature: "Safe for all fabric types" },
      { feature: "Stain and odor removal" },
      { feature: "Fabric protection available" },
      { feature: "Quick drying process" }
    ]
  },
  {
    id: "tile-grout-cleaning",
    title: "Tile & Grout Cleaning",
    description: "Restore your tile and grout to like-new condition",
    icon: "Grid3X3",
    features: [
      { feature: "Deep grout cleaning" },
      { feature: "Tile restoration" },
      { feature: "Sealing services" },
      { feature: "Bathroom and kitchen specialists" }
    ]
  }
];

export const testimonialsContent: TestimonialContent[] = [
  {
    id: "bill-lehnes",
    name: "Bill Lehnes",
    location: "Rocky Mount",
    rating: 5,
    content: "There were stains in the carpet that we couldn't identify. It looked REALLY BAD, but when they were finished, the carpets looked AMAZING. Saved me from having to replace the carpet."
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    location: "Wilson",
    rating: 5,
    content: "Anthony and his team did an incredible job on our carpets. Professional, punctual, and the results exceeded our expectations. Our carpets look brand new!"
  },
  {
    id: "mike-davis",
    name: "Mike Davis",
    location: "Tarboro",
    rating: 5,
    content: "Best carpet cleaning service in Eastern NC! Anthony is honest, reliable, and does exceptional work. We've been using Wilkins for years and wouldn't trust anyone else."
  }
];

export const aboutContent: AboutContent = {
  title: "About Wilkins Carpet Cleaning",
  content: "Family-Owned & Operated Since 2003. Anthony Wilkins has been serving Eastern North Carolina with professional carpet cleaning services for over 20 years.",
  stats: [
    { number: "20+", label: "Years Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction Guaranteed" }
  ]
};

export const blogContent: BlogContent[] = [
  {
    id: "12-step-process",
    title: "Why Our 12-Step Carpet Cleaning Process Gets Results Others Can't",
    date: "2024-01-15T10:00:00.000Z",
    excerpt: "Most carpet cleaning companies in Rocky Mount, Wilson, and Tarboro use basic 3-4 step methods that only clean the surface. Our comprehensive 12-step process ensures your carpets are deeply cleaned, sanitized, and protected for lasting results.",
    featuredImage: "/image.png",
    body: "Our comprehensive 12-step process ensures your carpets are deeply cleaned, sanitized, and protected for lasting results..."
  }
];

export const contactContent: ContactContent = {
  title: "Ready for Amazing Results?",
  subtitle: "Don't wait until your carpets are beyond help. Get your FREE estimate today and discover why customers say we're the best in the business.",
  phone: "252-937-3276",
  email: "Anthonywilkins777@gmail.com",
  address: "1357 N Wesleyan Blvd",
  city: "Rocky Mount, NC 27804",
  ctaTitle: "Get Your FREE Estimate",
  ctaSubtitle: "See why customers choose us over the competition. Professional service, honest pricing, amazing results.",
  rating: "4.8/5 Stars • 50+ Reviews"
};

export const footerContent: FooterContent = {
  companyName: "Wilkins Carpet Cleaning",
  tagline: "Family-Owned Service Since 2003",
  description: "Carolina's #1 preferred carpet cleaning specialist. Family-owned and operated, serving the Rocky Mount area with honest, dependable service for over 20 years.",
  phone: "252-937-3276",
  email: "Anthonywilkins777@gmail.com",
  address: "1357 N Wesleyan Blvd",
  city: "Rocky Mount, NC 27804",
  serviceAreas: "Rocky Mount, Wilson, Tarboro, Nashville, Roanoke Rapids, Louisburg, Springhope, Whitakers, Greenville and surrounding areas in North Carolina",
  ownerInfo: "Family-owned and operated since 2003 • Anthony Wilkins, Owner/Operator",
  services: [
    { service: "Carpet Steam Cleaning" },
    { service: "Commercial Carpet Cleaning" },
    { service: "Upholstery Cleaning" },
    { service: "Tile & Grout Cleaning" },
    { service: "Carpet Protection" },
    { service: "Janitorial Services" },
    { service: "Floor Stripping & Waxing" },
    { service: "Grout Re-coloring" }
  ],
  credentials: [
    { credential: "Licensed" },
    { credential: "Bonded" },
    { credential: "Insured" }
  ]
};

export const siteSettingsContent: SiteSettingsContent = {
  siteName: "Wilkins Carpet Cleaning - THE BEST in Rocky Mount, Wilson, Tarboro",
  siteDescription: "Award-winning carpet cleaning service serving Rocky Mount, Wilson, Tarboro & surrounding areas for 20+ years. Professional steam cleaning, upholstery, tile & grout.",
  primaryPhone: "252-937-3276",
  primaryEmail: "Anthonywilkins777@gmail.com",
  businessAddress: "1357 N Wesleyan Blvd",
  businessCity: "Rocky Mount, NC 27804",
  logoPath: "/wilkins-logo.webp"
};
