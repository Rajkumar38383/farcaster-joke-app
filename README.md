# Farcaster Joke Mini App - README

A fun and vibrant Farcaster mini app that generates hilarious programming, tech, and crypto jokes on demand! 😂

## Features

- 🎲 **Random Joke Generation** - 35+ curated tech jokes
- 📤 **Share on Farcaster** - One-click sharing via Farcaster SDK
- 🎨 **Premium Design** - Glassmorphism effects with smooth animations
- ⌨️ **Keyboard Shortcuts** - Press 'J' for joke, 'S' to share
- 📱 **Responsive** - Works perfectly on mobile and desktop
- 🌙 **Dark Mode** - Beautiful dark theme optimized for readability

## Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   The app will automatically open at `http://localhost:3000`

### Project Structure

```
farcaster-joke-app/
├── index.html              # Main HTML with Farcaster meta tags
├── style.css               # Premium styling with animations
├── app.js                  # Core logic & Farcaster SDK integration
├── jokes.js                # Joke collection (35+ jokes)
├── package.json            # Dependencies
└── .well-known/
    └── farcaster.json      # Farcaster manifest
```

## Deployment

To use this as a Farcaster mini app, you need to deploy it to a public URL:

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Update manifest:**
   - Edit `.well-known/farcaster.json`
   - Replace `homepage` with your deployed URL
   - Update `accountAssociation` with your Farcaster account details

### Other Hosting Options
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## Farcaster Integration

### Meta Tags
The app includes proper Farcaster meta tags for embedding:
- `fc:miniapp` - Identifies as a mini app
- `fc:miniapp:name` - App name
- `fc:miniapp:description` - App description
- `fc:miniapp:icon` - App icon (emoji)

### SDK Features Used
- `sdk.context` - Get Farcaster user context
- `sdk.actions.ready()` - Signal app is ready
- `sdk.actions.openComposer()` - Share jokes as casts

## Customization

### Add More Jokes
Edit `jokes.js` and add jokes to the `jokes` array:
```javascript
const jokes = [
  "Your new joke here! 😄",
  // ... more jokes
];
```

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* ... more variables */
}
```

## Keyboard Shortcuts

- **J** - Generate new joke
- **S** - Share current joke

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT

## Credits

Built with ❤️ for the Farcaster community
