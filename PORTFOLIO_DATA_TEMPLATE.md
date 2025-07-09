# 🎯 Portfolio Data Template Guide

This guide shows you exactly where to update your personal information in each section of your portfolio.

## 📋 Table of Contents
1. [Personal Information](#personal-information)
2. [About Section](#about-section)
3. [Skills Section](#skills-section)
4. [Experience Section](#experience-section)
5. [Education Section](#education-section)
6. [Certifications Section](#certifications-section)
7. [Projects Section](#projects-section)
8. [Interests Section](#interests-section)
9. [Contact Information](#contact-information)
10. [Social Media Links](#social-media-links)

---

## 🔧 Personal Information

### File: `src/components/HeroSection.tsx`
**Lines 25-35**: Update your main introduction
```typescript
<h1>
  Hi, I'm{' '}
  <span>YOUR_FIRST_NAME</span> {/* Change "Ganapathi" to your first name */}
</h1>

<p>
  YOUR_PROFESSIONAL_DESCRIPTION_HERE
  {/* Current: "Passionate fresher Full-Stack Developer eager to create..." */}
</p>
```

### File: `src/components/Navigation.tsx`
**Line 45**: Update navigation brand name
```typescript
<div className="text-2xl font-bold">
  YOUR_FULL_NAME_HERE {/* Current: "Ganapathi Pavan Kumar" */}
</div>
```

---

## 👤 About Section

### File: `src/components/AboutSection.tsx`

**Lines 50-70**: Update your personal story
```typescript
<p>
  Hello! I'm YOUR_FULL_NAME, YOUR_PROFESSIONAL_DESCRIPTION.
  YOUR_JOURNEY_STORY_HERE.
</p>
<p>
  YOUR_CURRENT_SKILLS_AND_EXPERTISE.
</p>
<p>
  YOUR_GOALS_AND_ASPIRATIONS.
</p>
```

**Lines 90-95**: Update profile image
```typescript
<img
  src="YOUR_PROFILE_IMAGE_URL_HERE"
  alt="YOUR_FULL_NAME"
  className="w-full h-full object-cover rounded-3xl"
/>
```

**Lines 15-40**: Update highlights data
```typescript
const highlights = [
  {
    icon: User,
    title: 'Who I Am',
    description: 'YOUR_DESCRIPTION_HERE'
  },
  // Update all 4 highlight descriptions
];
```

---

## 💻 Skills Section

### File: `src/components/SkillsSection.tsx`

**Lines 10-30**: Update your skills and proficiency levels
```typescript
const skills = [
  { name: 'YOUR_SKILL_1', icon: Code, level: YOUR_PROFICIENCY_PERCENTAGE, color: 'from-blue-500 to-blue-700' },
  { name: 'YOUR_SKILL_2', icon: Server, level: YOUR_PROFICIENCY_PERCENTAGE, color: 'from-green-500 to-green-700' },
  // Add/remove/modify skills as needed
];
```

**Example:**
```typescript
{ name: 'React', icon: Code, level: 95, color: 'from-blue-500 to-blue-700' },
{ name: 'Node.js', icon: Server, level: 88, color: 'from-green-500 to-green-700' },
```

---

## 💼 Experience Section

### File: `src/components/ExperienceSection.tsx`

**Lines 10-80**: Update your work experience
```typescript
const experiences = [
  {
    id: 1,
    title: 'YOUR_JOB_TITLE',
    company: 'YOUR_COMPANY_NAME',
    location: 'YOUR_WORK_LOCATION',
    period: 'START_DATE - END_DATE',
    type: 'Full-time/Contract/Part-time',
    description: 'YOUR_JOB_DESCRIPTION',
    achievements: [
      'YOUR_ACHIEVEMENT_1',
      'YOUR_ACHIEVEMENT_2',
      // Add more achievements
    ],
    technologies: ['TECH_1', 'TECH_2', 'TECH_3'],
    website: 'COMPANY_WEBSITE_URL'
  },
  // Add more experiences
];
```

---

## 🎓 Education Section

### File: `src/components/EducationSection.tsx`

**Lines 10-60**: Update your education details
```typescript
const education = [
  {
    id: 1,
    degree: 'YOUR_DEGREE_NAME',
    institution: 'YOUR_UNIVERSITY_NAME',
    location: 'UNIVERSITY_LOCATION',
    period: 'START_YEAR - END_YEAR',
    grade: 'YOUR_GRADE/CGPA',
    description: 'YOUR_EDUCATION_DESCRIPTION',
    coursework: [
      'COURSE_1',
      'COURSE_2',
      // Add relevant courses
    ],
    projects: [
      'PROJECT_1',
      'PROJECT_2',
      // Add academic projects
    ],
    achievements: [
      'ACHIEVEMENT_1',
      'ACHIEVEMENT_2',
      // Add academic achievements
    ]
  },
  // Add more education entries
];
```

---

## 🏆 Certifications Section

### File: `src/components/CertificationsSection.tsx`

**Lines 10-120**: Update your certifications
```typescript
const certifications = [
  {
    id: 1,
    title: 'YOUR_CERTIFICATION_NAME',
    issuer: 'ISSUING_ORGANIZATION',
    date: 'ISSUE_DATE',
    credentialId: 'YOUR_CREDENTIAL_ID',
    description: 'SHORT_DESCRIPTION',
    detailedDescription: 'DETAILED_DESCRIPTION',
    skills: ['SKILL_1', 'SKILL_2', 'SKILL_3'],
    verificationUrl: 'VERIFICATION_URL',
    certificateUrl: 'CERTIFICATE_DOWNLOAD_URL',
    logo: 'LOGO_IMAGE_URL',
    featured: true/false,
    validUntil: 'EXPIRY_DATE',
    examScore: 'YOUR_SCORE',
    issuedBy: 'FULL_ISSUER_NAME',
    credentialType: 'CERTIFICATION_TYPE'
  },
  // Add more certifications
];
```

---

## 🚀 Projects Section

### File: `src/components/ProjectsSection.tsx`

**Lines 10-50**: Update your projects
```typescript
const projects = [
  {
    id: 1,
    title: 'YOUR_PROJECT_NAME',
    description: 'SHORT_PROJECT_DESCRIPTION',
    longDescription: 'DETAILED_PROJECT_DESCRIPTION',
    image: 'PROJECT_IMAGE_URL',
    technologies: ['TECH_1', 'TECH_2', 'TECH_3'],
    github: 'GITHUB_REPOSITORY_URL',
    live: 'LIVE_DEMO_URL',
    featured: true/false
  },
  // Add more projects
];
```

---

## 🎯 Interests Section

### File: `src/components/InterestsSection.tsx`

**Lines 15-120**: Update your areas of interest
```typescript
const interests = [
  {
    id: 1,
    title: 'YOUR_INTEREST_AREA',
    description: 'DESCRIPTION_OF_INTEREST',
    icon: Code, // Choose appropriate icon
    color: 'from-blue-500 to-blue-700',
    technologies: ['RELATED_TECH_1', 'RELATED_TECH_2'],
    featured: true/false
  },
  // Add more interests
];
```

---

## 📞 Contact Information

### File: `src/components/ContactSection.tsx`

**Lines 25-40**: Update contact details
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'YOUR_EMAIL@example.com',
    href: 'mailto:YOUR_EMAIL@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: 'YOUR_PHONE_NUMBER',
    href: 'tel:YOUR_PHONE_NUMBER'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'YOUR_CITY, YOUR_COUNTRY',
    href: '#'
  }
];
```

### File: `src/components/Footer.tsx`

**Lines 30-50**: Update footer contact info
```typescript
<div className="space-y-2 mb-6">
  <div className="flex items-center space-x-2">
    <MapPin size={16} className="text-blue-500" />
    <span>YOUR_CITY, YOUR_COUNTRY</span>
  </div>
  <div className="flex items-center space-x-2">
    <Phone size={16} className="text-green-500" />
    <span>YOUR_PHONE_NUMBER</span>
  </div>
  <div className="flex items-center space-x-2">
    <Mail size={16} className="text-purple-500" />
    <span>YOUR_EMAIL@example.com</span>
  </div>
</div>
```

---

## 🔗 Social Media Links

### Multiple Files: Update social media links

**Files to update:**
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

**Update social links:**
```typescript
const socialLinks = [
  { icon: Github, href: 'YOUR_GITHUB_URL', label: 'GitHub' },
  { icon: Linkedin, href: 'YOUR_LINKEDIN_URL', label: 'LinkedIn' },
  { 
    icon: () => (/* X Logo SVG */), 
    href: 'YOUR_X_TWITTER_URL', 
    label: 'X (Twitter)' 
  },
];
```

---

## 🖼️ Images to Replace

### Profile Images
1. **Hero Section**: `src/components/HeroSection.tsx` - Line 95
2. **About Section**: `src/components/AboutSection.tsx` - Line 90

### Project Images
Update in `src/components/ProjectsSection.tsx` - Lines 15-25

### Certification Logos
Update in `src/components/CertificationsSection.tsx` - Lines 20-100

---

## 📝 Quick Update Checklist

- [ ] Personal name and title
- [ ] Profile images (2 locations)
- [ ] About section story
- [ ] Skills and proficiency levels
- [ ] Work experience details
- [ ] Education information
- [ ] Certifications with real URLs
- [ ] Project details and links
- [ ] Areas of interest
- [ ] Contact information
- [ ] Social media links
- [ ] Resume download link

---

## 🎨 Customization Tips

### Colors
- **Primary**: Blue (`blue-500`, `blue-600`)
- **Secondary**: Purple (`purple-500`, `purple-600`)
- **Accent**: Pink (`pink-500`, `pink-600`)

### Icons
- Use icons from `lucide-react`
- Available icons: `Code`, `Database`, `Globe`, `Smartphone`, `Cloud`, `Palette`, etc.

### Images
- **Recommended sizes**: 
  - Profile: 400x600px (9:16 ratio)
  - Projects: 600x400px
  - Logos: 100x100px

---

## 🚀 Ready to Update?

1. **Start with personal information** (name, contact)
2. **Update About section** with your story
3. **Add your real skills** and experience
4. **Replace placeholder projects** with your work
5. **Add your certifications** with real links
6. **Update contact information**
7. **Test all links** and verify data

**Need help with any specific section?** Just let me know which part you'd like to update first! 🎯