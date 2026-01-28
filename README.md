# 🍔 QuickBite - Food Delivery Platform

A full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring real-time cart management, user authentication, and a modern, responsive UI.

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login with JWT-based authentication
- Secure password hashing with bcryptjs
- Protected routes and middleware
- Session management with cookies
- Password recovery functionality

### 🛒 Shopping Experience
- Browse food items by categories
- Real-time search functionality
- Detailed food item pages with descriptions and images
- Dynamic shopping cart with state management
- Cart persistence across sessions
- Order tracking and management

### 🎨 User Interface
- Modern, responsive design with Tailwind CSS and DaisyUI
- Smooth animations using Motion (Framer Motion)
- Interactive components with Lucide React icons
- Toast notifications for user feedback
- Category-based food browsing
- Hero sections and engaging layouts

### ☁️ Cloud Integration
- Image hosting and management with Cloudinary
- Scalable image delivery
- Optimized image loading and caching

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library with latest features
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Motion** - Animation library
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React & React Icons** - Icon libraries

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Cloud-based image management
- **Nodemailer** - Email sending functionality
- **Passport.js** - Authentication middleware
- **Helmet** - Security middleware
- **CORS** - Cross-Origin Resource Sharing

### Development Tools
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting
- **dotenv** - Environment variable management

## 📁 Project Structure

```
food-delivery-website/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── FoodCard.jsx
│   │   │   ├── CategorySlide.jsx
│   │   │   ├── HeroComponent.jsx
│   │   │   ├── SearchCard.jsx
│   │   │   ├── Order.jsx
│   │   │   └── AuthSlider.jsx
│   │   ├── pages/           # Application pages
│   │   │   ├── Home.jsx
│   │   │   ├── Food.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── SearchPage.jsx
│   │   │   └── NotFound.jsx
│   │   ├── store/           # State management
│   │   │   ├── authStore.js
│   │   │   ├── cartStore.js
│   │   │   └── foodStore.js
│   │   ├── lib/             # Utilities and configurations
│   │   │   └── axios.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/              # Static assets
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   │   ├── authController.js
│   │   │   ├── foodController.js
│   │   │   └── cartController.js
│   │   ├── models/          # Database schemas
│   │   │   ├── userModel.js
│   │   │   └── foodModel.js
│   │   ├── routes/          # API routes
│   │   │   ├── authRoutes.js
│   │   │   ├── foodRoutes.js
│   │   │   └── cartRoutes.js
│   │   ├── middleware/      # Custom middleware
│   │   │   ├── protect.js
│   │   │   └── logger.js
│   │   ├── lib/             # External service configs
│   │   │   ├── db.js
│   │   │   └── cloudinary.js
│   │   ├── utils/           # Helper functions
│   │   │   └── generateToken.js
│   │   ├── data/            # Data management scripts
│   │   │   ├── cloudinary-upload.js
│   │   │   ├── mongo-push.js
│   │   │   └── foods_final.json
│   │   └── server.js
│   └── package.json
│
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image hosting)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd food-delivery-website
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Environment Variables**

Create `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration (for password recovery)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

Create `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

4. **Database Setup**

Optional: Upload food data and images to Cloudinary and MongoDB:
```bash
cd backend

# Upload images to Cloudinary
npm run upload

# Push data to MongoDB
npm run push

# Or run both commands
npm run full
```

### Running the Application

**Development Mode:**

```bash
# Run backend (from backend directory)
cd backend
npm run dev

# Run frontend (from frontend directory)
cd frontend
npm run dev
```

**Production Mode:**

```bash
# Build the application (from root directory)
npm run build

# Start the production server
npm start
```

The application will be available at:
- Frontend: `http://localhost:5173` (development)
- Backend: `http://localhost:5000`

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Password recovery

### Food Items
- `GET /api/foods` - Get all food items
- `GET /api/foods/:id` - Get single food item
- `GET /api/foods/category/:category` - Get foods by category
- `GET /api/foods/search?q=query` - Search food items

### Cart Management
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:id` - Update cart item
- `DELETE /api/cart/remove/:id` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

## 🎯 Key Features Implementation

### State Management with Zustand
The application uses Zustand for efficient state management:
- **authStore**: Manages user authentication state
- **cartStore**: Handles shopping cart operations
- **foodStore**: Manages food items and categories

### Protected Routes
Routes are protected using custom middleware that verifies JWT tokens, ensuring only authenticated users can access certain features.

### Image Management
Images are uploaded to Cloudinary using automated scripts, providing:
- Fast CDN delivery
- Automatic image optimization
- Responsive image serving

### Responsive Design
Built with Tailwind CSS and DaisyUI for:
- Mobile-first approach
- Consistent design system
- Pre-built, customizable components

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- HTTP-only cookies for token storage
- Helmet.js for security headers
- CORS configuration
- Input validation and sanitization
- Protected API routes

## 👨‍💻 Author

**Rex**

---

**Built with ❤️ using the MERN Stack**
