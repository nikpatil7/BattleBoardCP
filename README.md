# 🏆 BattleBoardCP: Code Contest Tracker

<div align="center">
  
  **⚔️ Your ultimate dashboard for coding contests — track, compete, and improve like a pro!**
  
  <img src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" width="400">
  
  [![Live Demo](https://img.shields.io/badge/🚀_LIVE_DEMO-brightgreen.svg?style=for-the-badge)](https://codecontesttracker.onrender.com)

  
</div>

## 📋 Table of Contents

- [Why BattleBoardCP?](#-why-i-built-battleboardcp)
- [Screenshots](#-screenshots)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Contributing](#-contributing)
- [Feel free to connect with me!](#feel-free-to-connect-with-me)

## 🚀 Why I Built BattleBoardCP

### The Problem 🤔
Seeing my peers struggle to keep up with coding contests, I noticed problems such as:

- Missing contests because there was no easy way to track them  
- Jumping between multiple platforms like Codeforces, CodeChef, and LeetCode  
- Losing track of past contests and their performance trends  
- Scattered notes, bookmarks, and solutions  
- No single dashboard to manage everything efficiently  

### My Solution 💡
I created **BattleBoardCP** to fix these issues. It’s a **unified platform** that helps you:

- 🎯 **Centralize contests** from all major platforms in one place  
- ⏰ **Never miss a contest** with customizable email reminders  
- 📊 **Track your progress** with detailed analytics and history  
- 📝 **Organize** your notes, bookmarks, and solutions efficiently  
- ⚡ **Save time** by eliminating the need to check multiple websites  


## 📸 Screenshots

<div align="center">
  <img src="./assets/BattleBoardCP-ss1.png" alt="Past Contest List Screenshot" width="600"/>
  <br />
  <img src="./assets/BattleBoardCP-ss2.png" alt="Upcoming Contest List Screenshot" width="600"/>
  <br />
  <img src="./assets/BattleBoardCP-ss3.png" alt="About Page Screenshot" width="600"/>
  <br />
  
</div>

## ✨ Key Features

- Real-time contest updates from Codeforces, CodeChef, and LeetCode  
- Personalized contest bookmarking & notes  
- Email reminders for upcoming contests  
- Performance analytics and progress tracking  
- Secure OTP-based authentication  

## 🛠️ Tech Stack

I kept it simple with **MERN stack + a few extras**:

- **Frontend** → React, Vite, Tailwind CSS  
- **State Management** → Redux  
- **Backend** → Node.js, Express  
- **Database** → MongoDB  
- **APIs** → CLIST API (contests), YouTube API (tutorials)  
- **Other Tools** → Nodemailer (emails), node-cron (reminders)

<div align="left">
  
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](#)

</div>

## ⚙️ Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.x or higher)
- npm or yarn
- MongoDB (local or Atlas account)
- Git

### Step-by-Step Setup Guide

1. **Clone the Repo**
   ```bash
   git clone https://github.com/nikpatil7/BattleBoardCP.git

   cd BattleBoardCP
   ```

2. **Frontend Setup**
   ```bash
   cd frontend

   npm install

   echo "VITE_REACT_APP_BASE_URL=http://localhost:3030" > .env

   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend

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

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

<!-- ## Link to the website:

Click on the Gif, you will be redirected to the website
[![Code Contest Tracker](https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif)](https://codecontesttracker.onrender.com)

Still Here? [Click Here](https://codecontesttracker.onrender.com) -->

## Feel free to connect with me!

<div align="center">
  <a href="mailto:nikhilpatil4714@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge" />
  </a>
  <a href="https://www.linkedin.com/in/nikhilpatil47/">
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