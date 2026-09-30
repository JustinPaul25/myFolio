# Shopify Developer Portfolio

A modern, tabbed dashboard portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a professional sidebar navigation, tab-based content switching, dark mode, and a clean developer-focused design.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Vercel** (deployment)

## 📁 Project Structure

```
myFolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Main dashboard with tab navigation
├── components/
│   ├── About.tsx             # About tab content
│   ├── Contact.tsx           # Contact tab content
│   ├── Hero.tsx              # Welcome banner tab content
│   ├── ProjectCard.tsx       # Individual project card
│   ├── Projects.tsx          # Projects tab content
│   ├── Sidebar.tsx           # Left sidebar navigation
│   ├── Skills.tsx            # Tech stack tab content
│   ├── TabNavigation.tsx     # Top tab navigation
│   └── ThemeToggle.tsx       # Dark/light mode toggle
├── data/
│   └── portfolio.ts          # All content (edit here!)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## ✏️ Customizing Your Content

All portfolio content lives in **`data/portfolio.ts`**. Update the following:

1. **Personal Information**
   ```typescript
   export const personalInfo = {
     name: "Your Name",
     email: "your.email@example.com",
     location: "Your City, Country",
     // ... more fields
   };
   ```

2. **About Section**
   - Edit the `about.paragraphs` array

3. **Projects**
   - Add/edit projects in the `projects` array
   - Set `featured: true` for one project to highlight it
   - Add store URLs for live links

4. **Skills**
   - Update `skillCategories` to match your tech stack

5. **Social Links**
   - Update GitHub, LinkedIn, and email URLs in `socialLinks`

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Edit your content:**
   - Open `data/portfolio.ts`
   - Replace all placeholder values (`[YOUR NAME]`, `[YOUR EMAIL]`, etc.)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**`1
   ```
   http://localhost:3000
   ```

The site will hot-reload as you make changes.

## 🚢 Deploying to Vercel

### Option 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to your Vercel account
   - Configure project settings
   - Deploy!

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🎨 Design Features

- **Dashboard Layout:** Professional sidebar + tabbed content area
- **Sidebar Navigation:** Dark blue sidebar with profile section and menu
- **Tab Navigation:** Horizontal tabs at the top: Welcome Banner, About, Client Projects, Tech Stack, Contact
- **Dark Mode First:** Dark theme by default with light mode toggle (top-right)
- **Accent Color:** Deep green (`#2E7D5B`) inspired by Shopify
- **Responsive:** Mobile-first with hamburger menu on small screens
- **Fast:** Optimized for Lighthouse 95+ scores
- **Accessible:** Keyboard navigable, proper contrast ratios
- **Smooth Transitions:** Tab switching with fade-in animations

## 📊 Performance

The site is optimized for performance:
- Static generation (SSG)
- Optimized fonts with Next.js font loading
- No external dependencies except Framer Motion
- Minimal JavaScript bundle
- CSS-in-JS via Tailwind (purged in production)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 SEO & Metadata

SEO metadata is configured in `app/layout.tsx`:
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure
- Proper heading hierarchy

Update the metadata in `layout.tsx` after editing your personal info in `data/portfolio.ts`.

## 🎯 What's Included

✅ Dashboard-style tabbed layout  
✅ Professional sidebar navigation with profile  
✅ Tab-based content switching (5 tabs)  
✅ Welcome banner with CTAs  
✅ About section with skills grid  
✅ Featured project highlight  
✅ Project cards with live links  
✅ Tech stack display by category  
✅ Contact section with social links  
✅ Dark/light mode toggle  
✅ Mobile responsive with hamburger menu  
✅ Framer Motion animations  
✅ Fully typed with TypeScript  
✅ SEO optimized  
✅ Vercel deployment ready  

## 🚫 What's NOT Included

- No contact form (uses mailto link)
- No blog section
- No CMS or database
- No testimonials section
- No analytics (add your own if needed)
- No footer (dashboard layout)

## 📄 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio.

---

**Need help?** Check the [Next.js documentation](https://nextjs.org/docs) or [Vercel deployment docs](https://vercel.com/docs).
