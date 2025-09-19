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
            name: "content",
            label: "Testimonial Content",
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
      }
    ]
  }
});
export {
  config_default as default
};
