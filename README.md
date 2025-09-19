# 🏆 BattleBoardCP: Code Contest Tracker

<img src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" width="500">
<br><br>

<div align="center">
  
  
  [![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen.svg?style=for-the-badge)](https://codecontesttracker.onrender.com)
  [![GitHub Stars](https://img.shields.io/github/stars/nikpatil7/BattleBoardCP?style=for-the-badge)](https://github.com/nikpatil7/BattleBoardCP/stargazers)
  [![GitHub Forks](https://img.shields.io/github/forks/nikpatil7/BattleBoardCP?style=for-the-badge)](https://github.com/nikpatil7/BattleBoardCP/network/members)
  [![GitHub Issues](https://img.shields.io/github/issues/nikpatil7/BattleBoardCP?style=for-the-badge)](https://github.com/nikpatil7/BattleBoardCP/issues)
</div>

## 🎯 Overview

A powerful web application to track and manage coding contests, helping users stay updated, analyze progress, and improve their competitive programming skills.
This comprehensive platform helps you:

- 🎯 Track and manage coding contests across multiple platforms
- 📊 Analyze your performance and progress
- 🔔 Never miss a contest with smart reminders
- 📝 Maintain personal notes and bookmarks
- 🎥 Access contest solutions and editorial videos

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](#)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)](#)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)](#)
[![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](#)


## ✨ Key Features

### � Contest Management
- Real-time contest updates from Codeforces, CodeChef, and LeetCode
- Advanced filtering and search capabilities
- Personalized contest bookmarking
- Comprehensive contest details (duration, difficulty, platform)

### 📱 Smart Notifications
- Customizable email reminders
- Priority-based notification system
- Contest start alerts
- Platform-specific notifications

### 📊 Progress Tracking
- Contest participation history
- Performance analytics
- Platform-wise statistics
- Progress visualization

### 📝 Personal Workspace
- Contest-specific notes
- Solution bookmarking
- YouTube tutorial integration
- Custom tags and categories

### 🔐 Security & Authentication
- Secure email verification
- OTP-based authentication
- JWT token implementation
- Password recovery system

## 🛠️ Technology Stack

<table>
  <tr>
    <th>Category</th>
    <th>Technologies</th>
  </tr>
  <tr>
    <td>Frontend Core</td>
    <td>
      <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /></a>
      <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" /></a>
      <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /></a>
    </td>
  </tr>
  <tr>
    <td>State Management</td>
    <td>
      <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /></a>
    </td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>
      <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
      <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
    </td>
  </tr>
  <tr>
    <td>Database</td>
    <td>
      <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /></a>
    </td>
  </tr>
  <tr>
    <td>Services & APIs</td>
    <td>
      <a href="https://nodemailer.com/"><img src="https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=nodemailer&logoColor=white" /></a>
      <a href="https://www.npmjs.com/package/node-cron"><img src="https://img.shields.io/badge/node--cron-CB3837?style=for-the-badge&logo=npm&logoColor=white" /></a>
    </td>
  </tr>
  <tr>
    <td>External APIs</td>
    <td>
      <a href="https://clist.by/api/v1/"><img src="https://img.shields.io/badge/CLIST_API-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /></a>
      <a href="https://developers.google.com/youtube/v3"><img src="https://img.shields.io/badge/YouTube_API-FF0000?style=for-the-badge&logo=youtube&logoColor=white" /></a>
    </td>
  </tr>
</table>

## ⚙️ Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.x or higher)
- npm or yarn
- MongoDB (local or Atlas account)
- Git

### Step-by-Step Setup Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nikpatil7/BattleBoardCP.git
   cd BattleBoardCP
   ```

2. **Frontend Setup**
   ```bash
   # Navigate to frontend directory
   cd frontend

   # Install dependencies
   npm install

   # Create .env file
   echo "VITE_REACT_APP_BASE_URL=http://localhost:3030" > .env

   # Start development server
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   # Navigate to backend directory
   cd backend

   # Install dependencies
   npm install

   # Create .env file with your credentials
   # Replace the values with your actual credentials
   cat > .env << EOL
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   PORT=3030
   EOL

   # Start server
   npm run dev
   ```

### Environment Variables

#### Frontend (.env)
- `VITE_REACT_APP_BASE_URL`: Backend API URL (default: http://localhost:3030)

#### Backend (.env)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `EMAIL_USER`: Email for sending notifications
- `EMAIL_PASS`: Email app password
- `PORT`: Server port (default: 3030)

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- Node.js (v18.x or newer)
- npm

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/nikpatil7/BattleBoardCP.git

# 2. Navigate to the project directory
cd BattleBoardCP

# 3. Install and run the frontend
cd frontend
npm install # Install dependencies
npm run dev # Start the development server

# 4. In a new terminal, install and run the backend
cd backend
npm install # Install dependencies
npm run dev # Start the development server
```

## Contributing

Contributions are welcome! Please follow these steps:

```bash
git checkout -b feature-name
git commit -m "Add feature-name"
git push origin feature-name
```

Open a pull request.

## Link to the website:

Click on the Gif, you will be redirected to the website
[![Code Contest Tracker](https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif)](https://codecontesttracker.onrender.com)

Still Here? [Click Here](https://codecontesttracker.onrender.com)



## 🤝 Contributing

We welcome contributions to BattleBoardCP! Here's how you can help:

### Ways to Contribute
- 🐛 Report bugs and issues
- ✨ Propose new features
- 📝 Improve documentation
- 🔍 Review code changes
- 🌟 Submit pull requests

### Development Process
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📞 Contact & Support

<div align="center">
  <a href="mailto:nikhilpatil4714@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge" />
  </a>
  <a href="https://www.linkedin.com/in/nikpatil7">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
  </a>
  <a href="https://github.com/nikpatil7/BattleBoardCP/issues">
    <img src="https://img.shields.io/badge/Issues-Report_Bug-red?style=for-the-badge&logo=github&logoColor=white" alt="Issues Badge" />
  </a>
</div>


---

<div align="center">
  
  <br />
  If you found this project helpful, please consider giving it a ⭐!
</div>