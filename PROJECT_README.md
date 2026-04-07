# VisaCareer.io - F1Jobs Clone

A modern, professional career acceleration platform clone built with React, FastAPI, and MongoDB. This is a pixel-perfect recreation of F1Jobs.io with a beautiful light theme, 3D animations, and fluid UI/UX.

## 🚀 Live Demo

Frontend: https://speedway-careers.preview.emergentagent.com

## ✨ Features

### Current Implementation (Frontend Only - Mock Data)

- **Modern Light Theme**: Clean, professional design with blue gradients
- **3D Animations**: Smooth blob animations, hover effects, and transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **10+ Sections**:
  - Hero section with animated background
  - Scrolling company logos (Google, Microsoft, Amazon, etc.)
  - Statistics section with features
  - Features showcase
  - Edge/Benefits section
  - How It Works (4-step process)
  - Marketing Team showcase
  - Services grid (6 services)
  - Limited time offer with live countdown timer
  - Professional footer

### Design Highlights

- ✅ Light theme with professional blue color scheme
- ✅ Lucide React icons (no emoji characters)
- ✅ Smooth animations and micro-interactions
- ✅ Gradient accents (subtle, not overwhelming)
- ✅ Custom scrollbar styling
- ✅ Hover effects on all interactive elements
- ✅ Glass morphism effects
- ✅ Responsive navigation with mobile menu

## 🛠️ Tech Stack

### Frontend
- **React 19** with React Router
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Lucide React** for icons
- **Custom CSS animations**

### Backend (Ready for Integration)
- **FastAPI** (Python)
- **MongoDB** with Motor async driver
- **JWT Authentication** (ready to implement)
- **AWS S3** for file storage (ready to implement)

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation bar with login/signup
│   │   │   ├── Hero.jsx            # Hero section with CTAs
│   │   │   ├── CompanyLogos.jsx    # Scrolling company logos
│   │   │   ├── StatsSection.jsx    # 10X stats with features
│   │   │   ├── FeaturesSection.jsx # 3 main features
│   │   │   ├── EdgeSection.jsx     # 4 benefits with "18 Days" stat
│   │   │   ├── HowItWorks.jsx      # 4-step process
│   │   │   ├── MarketingTeam.jsx   # Team roles showcase
│   │   │   ├── ServicesSection.jsx # 6 service cards
│   │   │   ├── LimitedOffer.jsx    # Countdown timer section
│   │   │   ├── Footer.jsx          # Footer with links
│   │   │   └── ui/                 # Shadcn UI components
│   │   ├── App.js                  # Main app with routing
│   │   ├── App.css                 # Additional styles
│   │   └── index.css               # Main CSS with animations
│   └── package.json
│
├── backend/
│   ├── server.py                   # FastAPI server
│   └── requirements.txt
│
├── BACKEND_INTEGRATION_GUIDE.md    # Complete backend integration guide
└── PROJECT_README.md               # This file
```

## 🎨 Design Features

### Animations
- **Blob animations**: Floating background elements
- **Scroll animations**: Infinite scrolling company logos
- **Fade in effects**: Smooth entrance animations
- **Hover effects**: Scale, rotate, and color transitions
- **Custom scrollbar**: Gradient blue scrollbar

### Color Scheme
- Primary: Blue (#2563eb to #4f46e5)
- Background: White with subtle blue gradients
- Text: Dark gray (#1f2937) for readability
- Accents: Indigo and light blue shades
- Shadows: Soft, professional shadows

## 📚 Backend Integration Guide

A comprehensive 3500+ word guide is available at `/app/BACKEND_INTEGRATION_GUIDE.md`

### What's Included:
1. **Complete Database Schema** (7 collections)
2. **30+ API Endpoints** with request/response examples
3. **JWT Authentication System** implementation
4. **Frontend Integration Points** with code examples
5. **6-Phase Implementation Plan** (week-by-week)
6. **Testing Checklist** (backend, frontend, integration)
7. **Security Best Practices**
8. **Deployment Checklist**

### Quick Start for Backend:

```python
# Example API usage
from api import authAPI, campaignAPI

# Register user
response = await authAPI.register({
  "email": "user@example.com",
  "password": "secure123",
  "full_name": "John Doe",
  "visa_status": "F1"
})

# Create campaign
campaign = await campaignAPI.create({
  "campaign_name": "Software Engineer Outreach",
  "target_roles": ["Software Engineer"],
  "target_companies": ["Google", "Microsoft"]
})
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB 5.0+

### Frontend Setup
```bash
cd frontend
yarn install
yarn start
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## 🌐 Environment Variables

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=https://your-app.preview.emergentagent.com
```

### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=visacareer
JWT_SECRET_KEY=your-secret-key
SENDGRID_API_KEY=your-sendgrid-key (optional)
AWS_S3_BUCKET=your-bucket (optional)
```

## 📋 Current Status

### ✅ Completed
- [x] Frontend UI with all sections
- [x] Responsive design (mobile, tablet, desktop)
- [x] Navigation with dropdown menus
- [x] Hero section with CTAs
- [x] Company logos animation
- [x] Statistics section
- [x] Features showcase
- [x] Benefits/Edge section
- [x] How it works process
- [x] Marketing team section
- [x] Services grid
- [x] Limited offer countdown
- [x] Professional footer
- [x] Custom animations
- [x] Mock data structure

### 🔄 Ready for Implementation
- [ ] User authentication (JWT)
- [ ] User profile management
- [ ] Campaign creation & management
- [ ] Company & contact database
- [ ] Email outreach system
- [ ] Interview scheduling
- [ ] H1B analytics
- [ ] Payment integration (Stripe)
- [ ] Admin dashboard

## 🎯 Key Differences from Original

1. **Theme**: Light theme instead of dark theme
2. **Name**: VisaCareer.io instead of F1Jobs.io
3. **Color Scheme**: Blue gradients instead of yellow/gold
4. **Typography**: System fonts for better performance
5. **Animations**: Enhanced with more modern effects

## 📖 Documentation

- **Backend Integration**: See `BACKEND_INTEGRATION_GUIDE.md`
- **API Documentation**: Generated with FastAPI (available at `/docs`)
- **Component Documentation**: JSDoc comments in each component

## 🔐 Security Notes

⚠️ **Important**: This is a development version with mock data
- Change JWT secret keys before production
- Implement rate limiting
- Add input validation
- Set up HTTPS
- Configure CORS properly
- Scan uploaded files for security

## 🚀 Next Steps

1. **Immediate**: Test all frontend interactions
2. **Week 1-2**: Implement authentication system
3. **Week 3-4**: Build campaign management
4. **Week 5-6**: Add email outreach system
5. **Week 7-8**: Implement analytics & tracking
6. **Week 9**: Testing & bug fixes
7. **Week 10**: Production deployment

## 📞 Support

For backend integration help, refer to the comprehensive guide at `/app/BACKEND_INTEGRATION_GUIDE.md`

## 📄 License

This is a clone/replica project for educational purposes.

---

**Built with ❤️ using Emergent AI Platform**
