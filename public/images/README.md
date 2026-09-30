# Images

Put portfolio images here. Next.js serves everything in `public/` at the site root.

## Suggested structure

```
public/images/
├── profile.jpg          → Your profile photo (sidebar)
├── projects/
│   ├── all-things-cedar.jpg
│   ├── buddyrider.jpg
│   ├── acorn-strategy.jpg
│   ├── baehr-feet.jpg
│   ├── bright-source.jpg
│   ├── c-pros-solutions.jpg
│   └── coffee-tree.jpg
└── og-image.jpg         → Optional Open Graph / social preview image
```

## How to use

After adding a file, reference it with a leading slash (no `public/` in the path):

```tsx
<img src="/images/profile.jpg" alt="Profile" />
// or
<Image src="/images/projects/buddyrider.jpg" alt="BuddyRider" width={800} height={600} />
```

## Tips

- Prefer **WebP** or **JPG** for photos; **PNG** for UI screenshots with text
- Profile photo: square, ~400×400px or larger
- Project screenshots: ~1200×800px works well
- Keep file names lowercase with hyphens (e.g. `all-things-cedar.jpg`)
