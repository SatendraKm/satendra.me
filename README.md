# Satendra Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and shadcn/ui components, featuring a bold dark theme with gradient accents and smooth animations.

## Features

- 🎨 Modern dark theme with cyan/purple gradient accents
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Smooth animations and interactive UI elements
- 📱 Fully responsive design
- 🎯 Sections: Hero, About, Experience, Projects, Skills, Contact
- 🔗 Social media integration (GitHub, LinkedIn, LeetCode)
- ✨ Mouse-tracking gradient background effect
- 🚀 Optimized for performance

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: shadcn/ui principles

1. **Create Next.js app structure**:

```bash
# Create necessary directories
mkdir -p app public

# Move portfolio.tsx to app/page.tsx
mv portfolio.tsx app/page.tsx

# Move globals.css to app/
mv globals.css app/globals.css
```

2. **Create app/layout.tsx**:

```typescript
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Satendra Kumar - Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer with hands-on experience building scalable React and Node.js applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

3. **Install dependencies**:

```bash
npm install
# or
yarn install
```

4. **Run development server**:

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Information

Edit `app/page.tsx` and update the following sections:

1. **Contact Information**:
```typescript
// Update email, phone, social links
<a href="mailto:your-email@gmail.com">
```

2. **Experience**:
```typescript
const experience = [
  // Add your work experience
]
```

3. **Projects**:
```typescript
const projects = [
  // Add your projects
]
```

4. **Skills**:
```typescript
const skills = {
  languages: ['...'],
  frontend: ['...'],
  // etc.
}
```

5. **Education**:
```typescript
const education = {
  degree: '...',
  university: '...',
  // etc.
}
```

## Performance Optimizations

- Uses Next.js 15 App Router for optimal performance
- Client-side animations for smooth interactions
- Lazy loading of sections
- Optimized images (add using next/image)
- Minimal bundle size with tree-shaking

## Color Scheme

- **Background**: Dark (#0a0a0a)
- **Primary Accent**: Cyan (#06b6d4)
- **Secondary Accent**: Purple (#9333ea)
- **Text**: White/Gray shades

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate CMS for easy content updates
- [ ] Add dark/light theme toggle
- [ ] Add animations library (Framer Motion)
- [ ] Add contact form with backend
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Add resume download functionality
- [ ] Add project case studies with detailed pages

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: satendrakm27@gmail.com
- LinkedIn: [linkedin.com/in/satendrakm](https://linkedin.com/in/satendrakm)
- GitHub: [github.com/SatendraKm](https://github.com/SatendraKm)

---

Built with ❤️ using Next.js and shadcn/ui