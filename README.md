# ExcavaPro - Excavating Business Website

A professional, modern, and fully responsive website for excavating businesses. Built with plain HTML, CSS, and JavaScript for maximum performance and ease of maintenance.

## 🚀 Features

- **5 Pages**: Home, Services, Gallery, About, and Contact
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure for search engines
- **Fast Loading**: No framework overhead, pure HTML/CSS/JS
- **Modern Design**: Clean, professional layout with smooth animations
- **Contact Form**: Built-in contact form with validation
- **Gallery Filter**: Interactive project gallery with category filtering
- **Easy to Customize**: Simple code structure, easy to modify

## 📁 Project Structure

```
excavating-website/
├── index.html          # Home page
├── services.html       # Services page
├── gallery.html        # Project gallery
├── about.html          # About us page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Your project images go here
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. **Company Information**

Update the following in ALL HTML files:

- **Company Name**: Replace "ExcavaPro" with your business name
- **Phone Number**: Replace "(555) 123-4567" with your phone
- **Email**: Replace "info@excavapro.com" with your email
- **Address**: Update "Your City, State" with your location
- **Business Hours**: Modify the hours in the footer

### 2. **Colors & Branding**

Edit `css/style.css` at the top (`:root` section):

```css
:root {
    --primary-color: #ff6b35;      /* Main orange color */
    --secondary-color: #004e89;    /* Blue color */
    --dark-color: #1a1a2e;         /* Dark backgrounds */
    /* Change these to match your brand */
}
```

### 3. **Services**

Edit `services.html` to add/remove/modify your specific services:

- Each service has an ID (e.g., `#excavation`, `#grading`)
- Update service names, descriptions, and bullet points
- Add or remove services as needed

### 4. **Images**

The website uses placeholder images. To add your own:

1. Place images in the `images/` folder
2. In `gallery.html`, replace the placeholder code with:

```html
<div class="gallery-item" data-category="residential">
    <img src="images/your-image.jpg" alt="Project description">
    <div class="gallery-info">
        <h3>Project Title</h3>
        <p>Project description</p>
    </div>
</div>
```

3. Update hero section background in `css/style.css`:

```css
.hero {
    background-image: url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

### 5. **Testimonials**

Edit the testimonials in `about.html`:

- Replace customer names and quotes
- Add more testimonial cards as needed

### 6. **Service Area**

Update the service area cities in `contact.html`:

```html
<div class="area-item">📍 Your City</div>
```

## 📱 Contact Form Setup

The contact form currently displays a success message without sending emails. To make it functional:

### Option 1: Use a Form Service (Easiest)

Use a service like:
- **Formspree** (https://formspree.io) - Free plan available
- **Netlify Forms** (if hosting on Netlify) - Free
- **Getform** (https://getform.io) - Free tier available

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

### Option 2: Use PHP (If you have PHP hosting)

Create a file `send-email.php` and update the form action:

```html
<form action="send-email.php" method="POST">
```

### Option 3: Use JavaScript + Backend API

Modify `js/main.js` to send form data to your server endpoint.

## 🌐 Hosting Options

### Free Hosting:
1. **Netlify** (Recommended)
   - Drag & drop deployment
   - Free SSL certificate
   - Custom domain support

2. **GitHub Pages**
   - Free hosting for static sites
   - Easy to set up

3. **Vercel**
   - Fast deployment
   - Free SSL

### Paid Hosting:
- Any web hosting service (GoDaddy, Bluehost, etc.)
- Upload files via FTP or cPanel file manager

## 🚀 Deployment Steps

### Using Netlify (Easiest):

1. Go to https://netlify.com
2. Sign up for free account
3. Drag and drop your website folder
4. Done! Your site is live

### Using Traditional Hosting:

1. Connect via FTP (FileZilla, etc.)
2. Upload all files to `public_html` or `www` folder
3. Your site should now be live at your domain

## 🔧 Technical Details

- **No Build Process**: Just open HTML files in a browser
- **No Dependencies**: Pure HTML, CSS, JavaScript
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Optimized**: Responsive breakpoints at 768px and 480px
- **Performance**: Lighthouse score ready (90+)

## 📊 SEO Tips

1. **Meta Tags**: Already included in all pages
2. **Update Title Tags**: Customize for each page with your location
3. **Add Google Business**: Link to your Google Business Profile
4. **Local Keywords**: Add your city/region to content
5. **Blog (Optional)**: Add a blog page for ongoing SEO

## 🎯 Next Steps

1. ✅ Customize company information
2. ✅ Update colors to match your brand
3. ✅ Add your project images
4. ✅ Set up contact form
5. ✅ Test on mobile devices
6. ✅ Deploy to hosting
7. ✅ Set up Google Analytics (optional)
8. ✅ Submit to Google Search Console

## 📞 Support

This is a custom-built website. For modifications:
- HTML knowledge: Edit structure and content
- CSS knowledge: Modify styles and layout
- JavaScript knowledge: Add/modify functionality

## 📄 License

This website template is provided as-is for your excavating business use. Feel free to modify and customize as needed.

---

**Built with ❤️ for professional excavating businesses**

Need help? Most web developers can easily customize this site since it uses standard HTML/CSS/JS.
