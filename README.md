# 🚀 Shivam Kanse - Interactive Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript, designed based on your wireframe specifications.

## ✨ Features

### 🎨 Design & Layout
- **Color Scheme**: Matches your wireframe with light reddish-brown background and darker borders
- **Grid Layout**: Three-column responsive design that adapts to different screen sizes
- **Modern UI**: Clean, professional design with smooth animations and hover effects

### 🎯 Interactive Elements
- **Modal Projects Display**: Click "View Projects" to see detailed project information
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Download CV**: Generates and downloads a text-based CV
- **Hire Me**: Opens email client with pre-filled hiring inquiry
- **Click to Copy**: Contact information can be copied with a single click
- **Interactive Skills**: Click skill tags for visual feedback

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Touch Support**: Swipe gestures and touch-friendly interactions
- **Accessibility**: Keyboard navigation and focus management

### 🎭 Animations
- **Fade-in Effects**: Content blocks animate in as you scroll
- **Hover Transforms**: Interactive elements respond to user interaction
- **Typing Effect**: Logo animates with a typewriter effect
- **Scroll Animations**: Smooth reveal animations for content

## 🛠️ File Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript interactivity
└── README.md           # This documentation
```

## 🚀 Getting Started

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Local Development**: Use a local server for best experience
3. **Customization**: Edit the files to personalize your portfolio

## 🎨 Customization Guide

### Personal Information
Update the following in `index.html`:
- Name and title
- About me description
- Contact information
- Skills and technologies
- Project details

### Colors & Styling
Modify `styles.css` to change:
- Color scheme (currently using brown/peach palette)
- Fonts and typography
- Spacing and layout
- Animation timings

### Functionality
Customize `script.js` for:
- Social media links (update URLs)
- CV content
- Email templates
- Animation behaviors

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript ES6+**: Interactive features and DOM manipulation
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Inter font family for typography

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized animations with CSS transforms
- Debounced scroll events
- Efficient DOM queries
- Touch gesture support

## 📱 Mobile Features

- **Touch Gestures**: Swipe up/down detection
- **Responsive Grid**: Adapts from 3 columns to 1 column
- **Touch-Friendly**: Optimized button sizes and spacing
- **Mobile Navigation**: Collapsible header on small screens

## 🎯 Interactive Features Explained

### Projects Modal
- Opens when clicking "View Projects" button
- Displays project cards with technology tags
- Closes with X button, clicking outside, or Escape key
- Prevents background scrolling when open

### Navigation
- Smooth scrolling to sections
- Sticky header with shadow effects
- Hover animations and underlines

### Contact Information
- Click any contact item to copy to clipboard
- Visual feedback with "Copied!" message
- Social media links open in new tabs

### Skills & Actions
- Interactive skill tags with click effects
- Download CV generates downloadable file
- Hire Me opens email with pre-filled content

## 🚀 Deployment

### Local Testing
1. Open `index.html` in your browser
2. Test all interactive features
3. Check responsive design on different screen sizes

### Web Hosting
1. Upload all files to your web hosting service
2. Ensure `index.html` is set as the default page
3. Test all functionality on the live site

### GitHub Pages
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your portfolio will be available at `username.github.io/repository-name`

## 🔍 Customization Examples

### Adding New Projects
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-code"></i>
    </div>
    <h3>Your Project Name</h3>
    <p>Project description here</p>
    <div class="project-tech">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
</div>
```

### Changing Colors
```css
:root {
    --primary-color: #8b4513;    /* Main brown color */
    --secondary-color: #f5e6d3;  /* Light background */
    --accent-color: #d2691e;     /* Accent orange */
}
```

### Adding New Skills
```html
<span class="skill-tag">New Skill</span>
```

## 🐛 Troubleshooting

### Common Issues
1. **Modal not opening**: Check if JavaScript is enabled
2. **Styling issues**: Ensure CSS file is properly linked
3. **Responsive problems**: Test on different screen sizes
4. **Animation glitches**: Check browser compatibility

### Debug Mode
Open browser console to see:
- Welcome message
- Error logs
- Interactive feedback

## 📞 Support & Customization

For customization help or questions:
- Email: shivamkanse2004@gmail.com
- Phone: +91 9841610471

## 📄 License

This portfolio template is created for personal use. Feel free to modify and adapt it for your own portfolio.

---

**Built with ❤️ for showcasing your skills and experience!**

*Last updated: December 2024*
