# Careera - Setup Instructions

Complete career acceleration platform with React frontend and FastAPI backend.

## 📦 Package Contents

```
careera-website/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # All UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   ├── package.json       # Dependencies
│   ├── .env              # Environment variables
│   └── tailwind.config.js # Tailwind configuration
├── backend/               # FastAPI server
│   ├── server.py         # Main server file
│   ├── requirements.txt  # Python dependencies
│   └── .env             # Backend environment
└── BACKEND_INTEGRATION_GUIDE.md  # Detailed integration guide
```

## 🚀 Quick Start

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

2. **Environment Variables**
   - The `.env` file is already configured
   - Update `REACT_APP_BACKEND_URL` if needed

3. **Start Development Server**
   ```bash
   yarn start
   ```
   - Opens at `http://localhost:3000`

### Backend Setup

1. **Install Python Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Environment Variables**
   - Update `MONGO_URL` in `.env` with your MongoDB connection
   - Default: `mongodb://localhost:27017/`

3. **Start Backend Server**
   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```
   - API runs at `http://localhost:8001`

## 🎨 Features Included

### Frontend Features
- ✅ **Homepage** with hero section, company logos, services
- ✅ **How It Works** page with 4-step process
- ✅ **Success Stories** page with testimonials
- ✅ **FAQ** page with accordion UI
- ✅ **Resources** page with downloadable guides
- ✅ **Pricing Plans** with 3 tiers (Basic, Elite, Premium)
- ✅ **Responsive Design** - works on all devices
- ✅ **Smooth Animations** - 30+ company logos scrolling
- ✅ **Professional Design** - modern gradients and shadows

### Backend (Ready for Integration)
- ✅ FastAPI server structure
- ✅ MongoDB connection setup
- ✅ CORS configured
- ✅ Example endpoints
- ✅ Ready for authentication, campaigns, etc.

## 📱 Pages Overview

1. **Home** (`/`) - Hero, company logos, services, pricing, CTA
2. **How It Works** (`/how-it-works`) - 4-step process explanation
3. **Success Stories** (`/success-stories`) - 6 client testimonials
4. **FAQ** (`/faq`) - 10 frequently asked questions
5. **Resources** (`/resources`) - 6 free downloadable guides

## 🎯 Key Components

### Main Components
- `Navbar.jsx` - Navigation with dropdown menus
- `Hero.jsx` - Enhanced hero section with stats badges
- `CompanyLogos.jsx` - 15 companies scrolling infinitely
- `Pricing.jsx` - 3 pricing plans with feature comparison
- `Footer.jsx` - Links and social media

### Page Components (in `/pages`)
- `HowItWorksPage.jsx`
- `SuccessStoriesPage.jsx`
- `FAQPage.jsx`
- `ResourcesPage.jsx`

### UI Components (Shadcn)
All Shadcn UI components included in `/components/ui/`

## 🔧 Customization

### Change Website Name
Currently set to "Careera" - search and replace in:
- `Navbar.jsx`
- `Footer.jsx`
- `index.html` (page title)

### Update Company Logos
Edit `CompanyLogos.jsx` - `companies` array

### Modify Pricing Plans
Edit `Pricing.jsx` - `plans` array and `allFeatures`

### Change Color Scheme
Edit `tailwind.config.js` and component gradient classes

## 📚 Documentation

- **Backend Integration**: See `BACKEND_INTEGRATION_GUIDE.md` for:
  - Database schema (7 collections)
  - 30+ API endpoints
  - JWT authentication
  - Step-by-step implementation plan

## 🌐 Environment Variables

### Frontend `.env`
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend `.env`
```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=careera
```

## 📦 Dependencies

### Frontend (React)
- React 19
- React Router DOM
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- Axios for API calls

### Backend (Python)
- FastAPI
- Motor (async MongoDB driver)
- Uvicorn
- Python-dotenv
- Pydantic

## 🚢 Deployment

### Frontend
- Build: `yarn build`
- Deploy to: Vercel, Netlify, or any static host
- Environment: Set `REACT_APP_BACKEND_URL` to production API

### Backend
- Deploy to: Railway, Render, AWS, or any Python host
- Ensure MongoDB is accessible
- Set environment variables

## 🛠️ Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload
2. **Linting**: Run `yarn lint` in frontend
3. **Testing**: Backend testing guide in integration doc
4. **Icons**: Using Lucide React - import from 'lucide-react'
5. **Styling**: Tailwind utility classes + custom CSS animations

## 📞 Support

For detailed backend integration:
- Read `BACKEND_INTEGRATION_GUIDE.md`
- Includes complete API documentation
- Database schema and examples
- Security best practices

## 🎨 Design Features

- **Animations**: Blob animations, scrolling logos, fade-in effects
- **Colors**: Blue gradients (customizable in Tailwind config)
- **Typography**: System fonts for performance
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML, ARIA labels

## ✨ What's Mock vs Real

### Currently Mock (Frontend Only):
- Company logos (static list)
- Success stories (hardcoded data)
- FAQ content (hardcoded)
- Resources (static)

### Ready for Backend:
- User authentication
- Campaign management
- Analytics tracking
- Payment integration
- Email outreach

See `BACKEND_INTEGRATION_GUIDE.md` for implementation details.

---

**Website Name**: Careera  
**Version**: 1.0  
**Last Updated**: February 2026  

Enjoy building with Careera! 🚀
