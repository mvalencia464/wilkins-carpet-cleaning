// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.TINA_BRANCH || process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Main Title",
            required: true
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
            required: true
          },
          {
            type: "string",
            name: "serviceAreas",
            label: "Service Areas",
            required: true
          },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Button Text"
              },
              {
                type: "string",
                name: "phone",
                label: "Phone Number"
              }
            ]
          }
        ]
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name (Lucide React)",
            required: true
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              {
                type: "string",
                name: "feature",
                label: "Feature"
              }
            ]
          }
        ]
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Customer Name",
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Testimonial Content",
            isBody: true,
            required: true
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true
          }
        ]
      },
      {
        name: "about",
        label: "About Section",
        path: "content/about",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true
          },
          {
            type: "rich-text",
            name: "content",
            label: "About Content",
            required: true
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "number",
                label: "Number"
              },
              {
                type: "string",
                name: "label",
                label: "Label"
              }
            ]
          }
        ]
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "contact",
        label: "Contact Section",
        path: "content/contact",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
            required: true
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
            required: true
          },
          {
            type: "string",
            name: "address",
            label: "Address",
            required: true
          },
          {
            type: "string",
            name: "city",
            label: "City, State, ZIP",
            required: true
          },
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
            required: true
          },
          {
            type: "string",
            name: "ctaSubtitle",
            label: "CTA Subtitle",
            required: true
          },
          {
            type: "string",
            name: "rating",
            label: "Star Rating Text",
            required: true
          }
        ]
      },
      {
        name: "footer",
        label: "Footer",
        path: "content/footer",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "companyName",
            label: "Company Name",
            required: true
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            required: true
          },
          {
            type: "rich-text",
            name: "description",
            label: "Company Description",
            required: true
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
            required: true
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
            required: true
          },
          {
            type: "string",
            name: "address",
            label: "Address",
            required: true
          },
          {
            type: "string",
            name: "city",
            label: "City, State, ZIP",
            required: true
          },
          {
            type: "string",
            name: "serviceAreas",
            label: "Service Areas",
            required: true
          },
          {
            type: "string",
            name: "ownerInfo",
            label: "Owner Information",
            required: true
          },
          {
            type: "object",
            name: "services",
            label: "Footer Services List",
            list: true,
            fields: [
              {
                type: "string",
                name: "service",
                label: "Service Name"
              }
            ]
          },
          {
            type: "object",
            name: "credentials",
            label: "Business Credentials",
            list: true,
            fields: [
              {
                type: "string",
                name: "credential",
                label: "Credential"
              }
            ]
          }
        ]
      },
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/settings",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            required: true
          },
          {
            type: "string",
            name: "primaryPhone",
            label: "Primary Phone Number",
            required: true
          },
          {
            type: "string",
            name: "primaryEmail",
            label: "Primary Email",
            required: true
          },
          {
            type: "string",
            name: "businessAddress",
            label: "Business Address",
            required: true
          },
          {
            type: "string",
            name: "businessCity",
            label: "City, State, ZIP",
            required: true
          },
          {
            type: "string",
            name: "logoPath",
            label: "Logo Path",
            required: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
