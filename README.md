<<<<<<< HEAD
🚀 Zerodha Clone – MERN Full Stack Trading Platform
<p align="center">














</p>

A full-stack stock trading simulation platform inspired by Zerodha’s Kite dashboard.
Built using the MERN stack with secure authentication, portfolio management, and interactive financial data visualization.

📌 Project Overview

This project replicates the core workflow of a stock trading platform where users can:

🔐 Register and log in securely

📈 Buy & Sell stocks (simulated)

📊 View dynamic portfolio holdings

📉 Analyze investments using Bar & Pie Charts

🖥 Experience a responsive dashboard interface

The application follows a modular full-stack architecture with separated frontend, dashboard, and backend layers.

🛠 Tech Stack
Frontend

React.js

React Router

Axios

Bootstrap

Chart.js

Backend

Node.js

Express.js

JWT Authentication

REST APIs

Database

MongoDB Atlas (Cloud Hosted)

Mongoose ODM

🏗 Project Architecture
Zerodha_Clone/
│

├── frontend/      → Landing pages + Authentication UI

├── dashboard/     → Kite-style trading dashboard

├── backend/       → Express server + APIs + MongoDB integration

🔐 Authentication Workflow

User signs up or logs in.

Credentials validated by backend.

JWT token generated upon successful authentication.

Protected routes allow access to dashboard.

Portfolio and trading operations become available.

📊 Core Features

✅ Secure JWT-based Authentication

✅ RESTful API Architecture

✅ Buy & Sell Stock Simulation

✅ Dynamic Holdings Tracking

✅ Portfolio Visualization (Bar Chart)

✅ Stock Comparison (Pie Chart)

✅ MongoDB Atlas Cloud Integration

✅ Modular Full-Stack Structure

🚀 Getting Started (Local Setup)
1️⃣ Clone the Repository

git clone https://github.com/Vikash-980/Zerodha-clone-1.git

cd Zerodha_Clone

2️⃣ Setup Backend

cd backend

npm install


Create a .env file:


MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm start

3️⃣ Setup Frontend

cd frontend

npm install

npm start

4️⃣ Setup Dashboard

cd dashboard

npm install

npm start

🌐 Sample API Endpoints
Method	Endpoint	Description
POST	/signup	Register new user
POST	/login	Authenticate user
GET	/allHoldings	Fetch user holdings
GET	/allOrders	Fetch orders
POST	/newOrder	Place buy/sell order
📈 Learning Outcomes

This project strengthened my expertise in:

Designing scalable REST APIs

Implementing JWT authentication flows

MongoDB schema modeling

React state management

Frontend–backend integration

Financial data visualization

Full-stack application structuring

📽 Demo

Demo Video Link : https://drive.google.com/file/d/1JgXpTlFKBY2fHf_mSkDUDart2G_tYE56/view?usp=sharing

🛣 Future Improvements

🔄 Real-time stock price API integration

📊 Profit & Loss calculation engine

☁ Cloud deployment (Render / Vercel)

🔐 Role-based access control

⚡ Performance optimizations

👨‍💻 Author

Sonu Firasath
Full Stack Developer | MERN Stack Enthusiast

🔗 GitHub: https://github.com/SonuFirasath

⭐ If you found this project interesting, consider giving it a star!
=======
# Zerodha-clone-1
>>>>>>> 508d6ba6f805e4d4463e7455f37625fe272811c3
