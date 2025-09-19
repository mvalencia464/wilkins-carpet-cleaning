# TinaCMS Cloud Setup Instructions

## ✅ Step 1: GitHub Repository - COMPLETED
Your repository is ready at: https://github.com/mvalencia464/wilkins-carpet-cleaning

## ✅ Step 2: Code Pushed to GitHub - COMPLETED
All your TinaCMS integration code has been successfully pushed to the main branch.

## Step 3: Connect Repository to TinaCloud

1. Go to [app.tina.io](https://app.tina.io)
2. Sign in with your account
3. Go to your project: https://app.tina.io/projects/7f0541cf-76a8-4193-ab54-da65437b3641/configuration
4. In the "Repository" section, connect your GitHub repository
5. Select the repository: `mvalencia464/wilkins-carpet-cleaning`
6. Set the branch to: `main`
7. Save the configuration

## Step 4: Test the Setup

Once connected, run:

```bash
npm run build
```

This should now work without errors.

## Step 5: Start Development

```bash
npm run dev
```

Then visit:
- Website: http://localhost:5173
- TinaCMS Admin: http://localhost:5173/admin/index.html

## Step 6: Deploy to Bolt

1. In Bolt.new, connect your GitHub repository
2. Set the build command to: `npm run build`
3. Set the output directory to: `dist`
4. Add environment variables:
   - `TINA_CLIENT_ID`: 7f0541cf-76a8-4193-ab54-da65437b3641
   - `TINA_TOKEN`: 1ae312568159920fafbdd2c2f725fc719768b103
   - `VITE_TINA_CLIENT_ID`: 7f0541cf-76a8-4193-ab54-da65437b3641

## Troubleshooting

If you get "Branch is not on TinaCloud" error:
1. Make sure you've pushed your code to GitHub
2. Make sure you've connected the repository in TinaCloud
3. Wait a few minutes for TinaCloud to sync
4. Try the build command again

## Your TinaCMS Project Details

- **Client ID**: 7f0541cf-76a8-4193-ab54-da65437b3641
- **Project URL**: https://app.tina.io/projects/7f0541cf-76a8-4193-ab54-da65437b3641
- **Admin Interface**: http://localhost:5173/admin/index.html (when running locally)
