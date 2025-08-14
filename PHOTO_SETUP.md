# 📸 Photo & Certificate Setup Guide

## Adding Your Profile Photo

1. **Place your photo** in the `public/images/` folder
2. **Recommended format**: JPG or PNG
3. **Recommended size**: 400x400 pixels (square)
4. **File name**: `profile-photo.jpg` (or .png)

## Update Hero Component

Once you add your photo, update the Hero component in `src/components/Hero.jsx`:

```jsx
// Replace the placeholder div with your actual photo
<div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-1 shadow-2xl">
  <img 
    src="/images/profile-photo.jpg" 
    alt="Sanchit Gupta"
    className="w-full h-full rounded-full object-cover"
  />
</div>
```

## Adding Certificate Images

1. **Place certificate images** in the `public/images/certificates/` folder
2. **Recommended format**: JPG or PNG
3. **Recommended size**: 800x600 pixels
4. **File naming**: Use descriptive names like `google-cloud-cert.jpg`

## Update Certificates Component

Update the certificates array in `src/components/Certificates.jsx`:

```jsx
const certificates = [
  {
    title: "Google Cloud Contributor",
    issuer: "Google",
    date: "2024",
    icon: <FaCertificate />,
    description: "Active contributor to Google Cloud Platform with multiple contributions to open-source projects.",
    color: "blue",
    image: "/images/certificates/google-cloud-cert.jpg" // Add this line
  },
  // ... other certificates
];
```

## Adding Project Screenshots

1. **Place project screenshots** in the `public/images/projects/` folder
2. **Recommended format**: JPG or PNG
3. **Recommended size**: 800x500 pixels
4. **File naming**: Use descriptive names like `quiz-master-screenshot.jpg`

## Update Projects Component

Update the projects array in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: "Quiz Master App (IQManthan)",
    // ... other properties
    image: "/images/projects/quiz-master-screenshot.jpg" // Replace placeholder
  },
  // ... other projects
];
```

## File Structure

```
public/
├── images/
│   ├── profile-photo.jpg          # Your profile photo
│   ├── certificates/
│   │   ├── google-cloud-cert.jpg
│   │   ├── microsoft-arcade-cert.jpg
│   │   └── ncc-cert.jpg
│   └── projects/
│       ├── quiz-master-screenshot.jpg
│       ├── threat-forecasting-screenshot.jpg
│       └── e-library-screenshot.jpg
└── Sanchit_gupta_resume.pdf
```

## Tips for Best Results

- **Profile Photo**: Use a professional headshot with good lighting
- **Certificates**: Ensure text is readable when resized
- **Project Screenshots**: Capture the most impressive features of your projects
- **File Optimization**: Compress images to reduce loading time
- **Consistent Sizing**: Maintain consistent aspect ratios for better layout

## Quick Start

1. Add your profile photo as `public/images/profile-photo.jpg`
2. Update the Hero component to use your photo
3. Add certificate images to `public/images/certificates/`
4. Add project screenshots to `public/images/projects/`
5. Update the respective components with the correct image paths

Your portfolio will look much more professional with real images instead of placeholders!

