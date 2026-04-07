# Backend Integration Guide for VisaCareer.io

## Overview
This document provides a comprehensive guide to add backend functionality to the VisaCareer.io frontend. The frontend is currently using mock data and needs to be integrated with a fully functional backend.

---

## Table of Contents
1. [Database Schema](#database-schema)
2. [API Endpoints](#api-endpoints)
3. [Authentication System](#authentication-system)
4. [Frontend Integration Points](#frontend-integration-points)
5. [Implementation Steps](#implementation-steps)
6. [Testing Checklist](#testing-checklist)

---

## 1. Database Schema

### Collections/Tables Needed

#### **users**
```python
{
  "_id": ObjectId,
  "email": String,
  "password": String (hashed),
  "full_name": String,
  "phone": String,
  "visa_status": String,  # F1, OPT, H1B, etc.
  "current_location": String,
  "target_roles": [String],  # ["Software Engineer", "Data Scientist"]
  "skills": [String],
  "resume_url": String,
  "linkedin_url": String,
  "github_url": String,
  "profile_optimized": Boolean,
  "subscription_plan": String,  # "free", "premium"
  "subscription_status": String,  # "active", "inactive", "trial"
  "created_at": DateTime,
  "updated_at": DateTime
}
```

#### **marketing_campaigns**
```python
{
  "_id": ObjectId,
  "user_id": ObjectId,
  "campaign_name": String,
  "status": String,  # "active", "paused", "completed"
  "target_companies": [String],
  "target_roles": [String],
  "emails_sent": Number,
  "opens": Number,
  "responses": Number,
  "interviews_scheduled": Number,
  "created_at": DateTime,
  "updated_at": DateTime
}
```

#### **companies**
```python
{
  "_id": ObjectId,
  "name": String,
  "logo_url": String,
  "industry": String,
  "size": String,
  "location": String,
  "h1b_sponsorship": Boolean,
  "h1b_history": {
    "2024": Number,
    "2025": Number,
    "2026": Number
  },
  "website": String,
  "careers_page": String,
  "hiring_contacts": [ObjectId],  # References to contacts collection
  "created_at": DateTime
}
```

#### **hiring_contacts**
```python
{
  "_id": ObjectId,
  "company_id": ObjectId,
  "name": String,
  "title": String,
  "email": String,
  "linkedin_url": String,
  "verified": Boolean,
  "last_active": DateTime,
  "created_at": DateTime
}
```

#### **outreach_emails**
```python
{
  "_id": ObjectId,
  "campaign_id": ObjectId,
  "user_id": ObjectId,
  "contact_id": ObjectId,
  "subject": String,
  "body": String,
  "sent_at": DateTime,
  "opened": Boolean,
  "opened_at": DateTime,
  "responded": Boolean,
  "responded_at": DateTime,
  "status": String  # "sent", "opened", "responded", "bounced"
}
```

#### **interviews**
```python
{
  "_id": ObjectId,
  "user_id": ObjectId,
  "company_id": ObjectId,
  "contact_id": ObjectId,
  "scheduled_at": DateTime,
  "interview_type": String,  # "phone", "technical", "onsite", "final"
  "status": String,  # "scheduled", "completed", "cancelled"
  "feedback": String,
  "result": String,  # "passed", "rejected", "offer"
  "created_at": DateTime
}
```

#### **job_offers**
```python
{
  "_id": ObjectId,
  "user_id": ObjectId,
  "company_id": ObjectId,
  "position": String,
  "salary": Number,
  "location": String,
  "offer_date": DateTime,
  "acceptance_deadline": DateTime,
  "status": String,  # "pending", "accepted", "rejected"
  "visa_sponsorship": Boolean,
  "created_at": DateTime
}
```

---

## 2. API Endpoints

### Authentication Endpoints

#### **POST /api/auth/register**
```python
Request:
{
  "email": "user@example.com",
  "password": "securepassword",
  "full_name": "John Doe",
  "visa_status": "F1"
}

Response:
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "full_name": "John Doe"
  },
  "token": "jwt_token_here"
}
```

#### **POST /api/auth/login**
```python
Request:
{
  "email": "user@example.com",
  "password": "securepassword"
}

Response:
{
  "success": true,
  "user": {...},
  "token": "jwt_token_here"
}
```

#### **GET /api/auth/me**
```python
Headers: { "Authorization": "Bearer jwt_token_here" }

Response:
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "full_name": "John Doe",
    "subscription_plan": "premium",
    ...
  }
}
```

---

### User Profile Endpoints

#### **PUT /api/profile/update**
```python
Request:
{
  "full_name": "John Doe",
  "phone": "+1234567890",
  "target_roles": ["Software Engineer"],
  "skills": ["React", "Python", "AWS"],
  "linkedin_url": "https://linkedin.com/in/johndoe"
}

Response:
{
  "success": true,
  "message": "Profile updated successfully"
}
```

#### **POST /api/profile/upload-resume**
```python
Request: FormData with file
{
  "resume": File
}

Response:
{
  "success": true,
  "resume_url": "https://storage.url/resume.pdf"
}
```

---

### Campaign Endpoints

#### **POST /api/campaigns/create**
```python
Request:
{
  "campaign_name": "Software Engineer Outreach",
  "target_roles": ["Software Engineer", "Full Stack Developer"],
  "target_companies": ["Google", "Microsoft", "Amazon"],
  "target_locations": ["California", "New York"]
}

Response:
{
  "success": true,
  "campaign_id": "campaign_id",
  "message": "Campaign created successfully"
}
```

#### **GET /api/campaigns/list**
```python
Response:
{
  "success": true,
  "campaigns": [
    {
      "id": "campaign_id",
      "campaign_name": "Software Engineer Outreach",
      "status": "active",
      "emails_sent": 45,
      "opens": 23,
      "responses": 5,
      "created_at": "2026-02-01T10:00:00Z"
    }
  ]
}
```

#### **GET /api/campaigns/{campaign_id}/analytics**
```python
Response:
{
  "success": true,
  "analytics": {
    "emails_sent": 45,
    "open_rate": 0.51,
    "response_rate": 0.11,
    "interviews_scheduled": 2,
    "timeline": [
      { "date": "2026-02-01", "sent": 10, "opened": 5, "responded": 1 }
    ]
  }
}
```

---

### Company & Contact Endpoints

#### **GET /api/companies/search**
```python
Query params: ?industry=tech&h1b_sponsorship=true&location=California

Response:
{
  "success": true,
  "companies": [
    {
      "id": "company_id",
      "name": "Google",
      "logo_url": "https://...",
      "h1b_sponsorship": true,
      "location": "Mountain View, CA",
      "hiring_contacts_count": 15
    }
  ]
}
```

#### **GET /api/contacts/search**
```python
Query params: ?company_id=xyz&role=recruiter

Response:
{
  "success": true,
  "contacts": [
    {
      "id": "contact_id",
      "name": "Jane Smith",
      "title": "Senior Technical Recruiter",
      "company": "Google",
      "email": "jane.smith@google.com",
      "linkedin_url": "https://..."
    }
  ]
}
```

---

### Email & Outreach Endpoints

#### **POST /api/outreach/generate-email**
```python
Request:
{
  "contact_id": "contact_id",
  "user_profile": {...},
  "template_type": "initial_outreach"
}

Response:
{
  "success": true,
  "email": {
    "subject": "Passionate Software Engineer Seeking Opportunities",
    "body": "Dear Jane,\n\nI came across..."
  }
}
```

#### **POST /api/outreach/send-email**
```python
Request:
{
  "campaign_id": "campaign_id",
  "contact_id": "contact_id",
  "subject": "...",
  "body": "..."
}

Response:
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

### Interview & Placement Endpoints

#### **GET /api/interviews/list**
```python
Response:
{
  "success": true,
  "interviews": [
    {
      "id": "interview_id",
      "company": "Google",
      "position": "Software Engineer",
      "scheduled_at": "2026-02-15T14:00:00Z",
      "interview_type": "technical",
      "status": "scheduled"
    }
  ]
}
```

#### **POST /api/interviews/schedule**
```python
Request:
{
  "company_id": "company_id",
  "scheduled_at": "2026-02-15T14:00:00Z",
  "interview_type": "phone"
}

Response:
{
  "success": true,
  "interview_id": "interview_id"
}
```

---

### H1B Analytics Endpoints

#### **GET /api/h1b/analytics**
```python
Query params: ?company_name=Google

Response:
{
  "success": true,
  "analytics": {
    "company": "Google",
    "h1b_approvals": {
      "2024": 1250,
      "2025": 1420,
      "2026": 890
    },
    "average_salary": 145000,
    "top_positions": ["Software Engineer", "Data Scientist"]
  }
}
```

---

## 3. Authentication System

### Implementation Using JWT

```python
# backend/auth.py
from jose import JWTError, jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

SECRET_KEY = "your-secret-key-here"  # Use environment variable
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return user_id
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
```

---

## 4. Frontend Integration Points

### Where Frontend Needs Backend

1. **Navbar Component** (`/components/Navbar.jsx`)
   - Login button → POST /api/auth/login
   - User authentication state management

2. **Hero Component** (`/components/Hero.jsx`)
   - "Get Me Hired" button → Redirect to signup/dashboard
   - "Access Resources" button → Fetch resources

3. **CompanyLogos Component** (`/components/CompanyLogos.jsx`)
   - Currently using hardcoded logos
   - **Backend**: GET /api/companies/featured

4. **StatsSection** (`/components/StatsSection.jsx`)
   - "Try It Now" button → Campaign creation

5. **EdgeSection** (`/components/EdgeSection.jsx`)
   - "Start My Marketing Campaign" button → POST /api/campaigns/create

6. **Services Dashboard** (New Page Needed)
   - Display user campaigns
   - Show analytics
   - Manage profile

### Example Frontend API Integration

```javascript
// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL + '/api';

// Create axios instance with interceptors
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  login: (email, password) => 
    api.post('/auth/login', { email, password }),
  
  register: (userData) => 
    api.post('/auth/register', userData),
  
  getCurrentUser: () => 
    api.get('/auth/me'),
};

// Campaign APIs
export const campaignAPI = {
  create: (campaignData) => 
    api.post('/campaigns/create', campaignData),
  
  list: () => 
    api.get('/campaigns/list'),
  
  getAnalytics: (campaignId) => 
    api.get(`/campaigns/${campaignId}/analytics`),
};

// Company APIs
export const companyAPI = {
  search: (filters) => 
    api.get('/companies/search', { params: filters }),
  
  getFeatured: () => 
    api.get('/companies/featured'),
};

export default api;
```

---

## 5. Implementation Steps

### Phase 1: Basic Authentication (Week 1)
1. Set up MongoDB models for users
2. Implement registration endpoint
3. Implement login endpoint
4. Add JWT authentication
5. Create protected route middleware
6. Frontend: Create login/signup modals
7. Frontend: Add authentication context
8. Frontend: Store JWT in localStorage
9. Test authentication flow

### Phase 2: Profile Management (Week 2)
1. Create profile update endpoint
2. Add file upload for resume (use AWS S3 or similar)
3. Frontend: Create user dashboard
4. Frontend: Build profile form
5. Frontend: Add resume upload UI
6. Test profile CRUD operations

### Phase 3: Campaign System (Week 3)
1. Create campaign models
2. Implement campaign creation endpoint
3. Add campaign listing endpoint
4. Build campaign analytics logic
5. Frontend: Create campaign dashboard
6. Frontend: Build campaign creation form
7. Frontend: Display campaign statistics
8. Test campaign workflows

### Phase 4: Company & Contact Database (Week 4)
1. Seed database with company data
2. Create company search endpoint
3. Add hiring contacts data
4. Implement contact search
5. Frontend: Build company search UI
6. Frontend: Create contact list view
7. Test search and filtering

### Phase 5: Email Outreach System (Week 5)
1. Integrate email service (SendGrid/AWS SES)
2. Create email generation logic (can use OpenAI API)
3. Implement send email endpoint
4. Add email tracking (opens, clicks)
5. Frontend: Build email composer
6. Frontend: Show email analytics
7. Test email sending

### Phase 6: Interview & Placement Tracking (Week 6)
1. Create interview models
2. Add interview scheduling endpoints
3. Build placement tracking
4. Frontend: Create interview calendar
5. Frontend: Build placement dashboard
6. Test end-to-end workflow

---

## 6. Testing Checklist

### Backend Tests
- [ ] User registration with validation
- [ ] User login with correct/incorrect credentials
- [ ] JWT token generation and verification
- [ ] Protected routes require authentication
- [ ] Profile update with valid data
- [ ] File upload for resumes
- [ ] Campaign creation
- [ ] Campaign analytics calculation
- [ ] Company search with filters
- [ ] Email sending integration
- [ ] Interview scheduling

### Frontend Tests
- [ ] Login form validation
- [ ] Signup form validation
- [ ] Authentication state persistence
- [ ] Protected routes redirect to login
- [ ] Profile form updates backend
- [ ] Campaign creation flow
- [ ] Dashboard displays correct data
- [ ] Email composer works
- [ ] Analytics charts render correctly
- [ ] Mobile responsiveness

### Integration Tests
- [ ] Complete user journey from signup to campaign
- [ ] Email outreach workflow
- [ ] Interview scheduling flow
- [ ] Data consistency across components

---

## 7. Environment Variables

### Backend (.env)
```bash
MONGO_URL=mongodb://localhost:27017/
DB_NAME=visacareer
JWT_SECRET_KEY=your-super-secret-key-change-in-production
JWT_ALGORITHM=HS256
JWT_EXPIRY_MINUTES=10080

# Email Service (choose one)
SENDGRID_API_KEY=your-sendgrid-key
AWS_SES_ACCESS_KEY=your-aws-key
AWS_SES_SECRET_KEY=your-aws-secret

# Storage (for resume uploads)
AWS_S3_BUCKET=your-bucket-name
AWS_S3_REGION=us-east-1

# AI Services (optional for email generation)
OPENAI_API_KEY=your-openai-key
```

### Frontend (.env)
```bash
REACT_APP_BACKEND_URL=https://your-app.preview.emergentagent.com
```

---

## 8. Additional Features to Consider

### Nice-to-Have Features
1. **Email Templates Library**: Pre-built email templates for different scenarios
2. **AI Resume Optimizer**: Use AI to suggest resume improvements
3. **LinkedIn Integration**: Auto-import profile data
4. **Calendar Integration**: Sync interview schedules with Google Calendar
5. **Payment Integration**: Stripe for premium subscriptions
6. **Notifications System**: Email/SMS alerts for responses
7. **Admin Dashboard**: Manage users, companies, and system analytics
8. **Referral Program**: User referral tracking and rewards
9. **Blog/Resources Section**: Dynamic content management
10. **Live Chat Support**: Customer support integration

---

## 9. Security Considerations

1. **Password Security**: Always hash passwords (bcrypt)
2. **JWT Security**: Use strong secret keys, short expiry times
3. **Input Validation**: Validate all user inputs on backend
4. **Rate Limiting**: Prevent abuse of API endpoints
5. **CORS Configuration**: Properly configure CORS for production
6. **SQL/NoSQL Injection**: Use parameterized queries
7. **File Upload Security**: Validate file types, scan for viruses
8. **HTTPS Only**: Always use HTTPS in production
9. **Environment Variables**: Never commit secrets to git
10. **Regular Updates**: Keep dependencies up to date

---

## 10. Deployment Checklist

- [ ] Set up production MongoDB database
- [ ] Configure environment variables
- [ ] Set up S3 bucket for file storage
- [ ] Configure email service (SendGrid/SES)
- [ ] Set up CI/CD pipeline
- [ ] Configure domain and SSL certificate
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy
- [ ] Test all integrations in staging
- [ ] Perform security audit
- [ ] Load testing for scalability

---

## Support & Resources

For questions or issues during implementation:
- MongoDB Documentation: https://docs.mongodb.com/
- FastAPI Documentation: https://fastapi.tiangolo.com/
- React Documentation: https://react.dev/
- JWT Best Practices: https://tools.ietf.org/html/rfc7519

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Maintained By**: VisaCareer.io Development Team
