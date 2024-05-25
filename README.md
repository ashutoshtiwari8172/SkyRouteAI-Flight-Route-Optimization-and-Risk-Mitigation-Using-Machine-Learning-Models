# Flight Navigation Optimization System

## Description
This project aims to enhance flight navigation by providing optimized flight paths, real-time risk assessments, and alternative route suggestions. The system leverages machine learning models for safety, efficiency, and health monitoring, ensuring safe and efficient navigation.

## Features
- User authentication with NextAuth
- Role-based access control for Airline and Pilot dashboards
- Real-time flight path optimization
- Flight health metrics monitoring
- Data storage and retrieval using MongoDB

## Technologies Used
- Next.js
- NextAuth
- MongoDB
- Tailwind CSS
- Flask
- Vercel (for frontend hosting)
- Google Cloud Platform (for backend hosting)

## Architecture


![architecture](https://github.com/ashutoshtiwari8172/flightRoute/assets/134742047/c2d49495-9759-4d7d-9e12-2eaba685e3a0)


## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
2. cd your-repo

3.npm install

# MongoDB connection string
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

# NextAuth secret
NEXTAUTH_SECRET=your-nextauth-secret

# NextAuth URL
NEXTAUTH_URL=http://localhost:3000
npm run dev

Documentation
For detailed documentation, refer to the Flight Navigation Optimization System Documentation.

Deployment
Frontend
Deploy the frontend on Vercel:

Push your code to GitHub.
Connect your repository to Vercel.
Configure the necessary environment variables on Vercel.
Deploy the application.
Backend
Deploy the backend on Google Cloud Platform (GCP):

Push your backend code to GitHub.
Set up a GCP project and configure your cloud services.
Deploy your Flask application on GCP.
Configure the necessary environment variables.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
