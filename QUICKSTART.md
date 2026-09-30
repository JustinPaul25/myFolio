# Quick Start Guide

## 🚀 Get Up and Running in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Edit Your Content
Open `data/portfolio.ts` and replace all placeholders:
- `[YOUR NAME]`
- `[YOUR EMAIL]`
- `[YOUR CITY, COUNTRY]`
- `[YOUR GITHUB URL]`
- `[YOUR LINKEDIN URL]`

### 3. Run Locally
```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 🚢 Deploy to Vercel

### Quick Deploy (Easiest)
```bash
npm install -g vercel
vercel
```

Follow the prompts, and you're live!

### Production Deploy
```bash
vercel --prod
```

---

## 🎨 Customization Tips

- **Change accent color:** Edit `tailwind.config.ts` → colors → accent
- **Add more projects:** Edit `data/portfolio.ts` → projects array
- **Update skills:** Edit `data/portfolio.ts` → skillCategories
- **Modify sections:** Edit components in `components/` folder

---

## ✅ Checklist Before Deploying

- [ ] Updated all personal info in `data/portfolio.ts`
- [ ] Replaced all `[YOUR ...]` placeholders
- [ ] Added real project URLs
- [ ] Tested dark/light mode toggle
- [ ] Tested on mobile (Chrome DevTools)
- [ ] Updated SEO metadata in `app/layout.tsx`

---

**That's it!** Your portfolio is ready to go live. 🚀
