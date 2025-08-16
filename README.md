# 🧠 ThinkBoard

A modern, full-stack note-taking application built with the MERN stack. ThinkBoard allows users to create, view, edit, and delete notes with a clean, responsive interface and rate limiting protection.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 📝 **Create Notes**: Add new notes with title and content
- 👀 **View Notes**: Browse all notes in a responsive grid layout
- ✏️ **Edit Notes**: Update existing notes with ease
- 🗑️ **Delete Notes**: Remove notes with confirmation dialog
- 🛡️ **Rate Limiting**: Built-in protection against API abuse using Upstash Redis
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔥 **Real-time Feedback**: Toast notifications for user actions
- 🎨 **Modern UI**: Clean interface built with Tailwind CSS and DaisyUI

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Elegant toast notifications
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
ThinkBoard/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── lib/             # Utility functions and configs
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Application entry point
│   ├── public/              # Public static files
│   └── package.json
│
├── backend/                  # Express backend API
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   │   └── noteController.js
│   │   ├── models/          # Database models
│   │   │   └── Note.js
│   │   ├── routes/          # API routes
│   │   │   └── notesRoutes.js
│   │   ├── middleware/      # Custom middleware
│   │   │   └── rateLimiter.js
│   │   ├── config/          # Configuration files
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   └── server.js        # Server entry point
│   └── package.json
│
├── .gitignore               # Git ignore rules
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/thewijay/ThinkBoard.git
   cd thinkboard
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory:

   ```env
   MONGO_URI=mongodb://localhost:27017/thinkboard
   # OR for MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/thinkboard

   PORT=5001

   # Upstash Redis for rate limiting
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

### 🏃‍♂️ Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

   The API server will start on `http://localhost:5001`

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   The React app will start on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 📚 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/notes`     | Get all notes       |
| GET    | `/api/notes/:id` | Get a specific note |
| POST   | `/api/notes`     | Create a new note   |
| PUT    | `/api/notes/:id` | Update a note       |
| DELETE | `/api/notes/:id` | Delete a note       |

### Example API Usage

**Create a note:**

```javascript
POST /api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note."
}
```

**Get all notes:**

```javascript
GET / api / notes
```

## 🔧 Scripts

### Backend Scripts

```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
```

### Frontend Scripts

```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🛡️ Rate Limiting

The application includes built-in rate limiting using Upstash Redis to prevent API abuse:

- **Limit**: 10 requests per minute per IP
- **Response**: 429 status code when limit exceeded
- **UI Feedback**: Special rate limit UI component shown to users

## 🎨 UI Components

- **Responsive Grid Layout**: Notes displayed in a responsive grid
- **Modern Card Design**: Clean note cards with hover effects
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Smooth loading indicators
- **Confirmation Dialogs**: Delete confirmation for safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Express](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [DaisyUI](https://daisyui.com/) - UI components
- [Upstash](https://upstash.com/) - Redis for rate limiting

---

<div align="center">
  <p>Built by developers, for developers who think better with organized thoughts</p>
  <p><em>"Because even the best ideas deserve a beautiful home"</em></p>
  <p>💻 Code • ☕ Coffee • 📝 Notes • 🔄 Repeat</p>
  <br>
  <p>
    <a href="https://github.com/thewijay">👨‍💻 Follow the creator</a> •
  </p>
</div>
