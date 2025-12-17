import smartFarmerImg from "../assets/projects/smart-farmer.png";
import wanderWithWorldImg from "../assets/projects/wander-with-world.png";
import rakshakImg from "../assets/projects/rakshak.jpg";
import delishImg from "../assets/projects/delish-diaries.png";

const ProjectsData = [
  {
    id: 1,
    title: "Smart Farmer (Digital Farmer Assistant)",
    shortDesc: "AI-driven agricultural web solution designed to assist farmers in maintaining crop health.",
    img: smartFarmerImg,
    githubLink: "https://github.com/devurmil/Smart-Farmer",
    liveLink: "https://smart-farmer-three.vercel.app/",
    description: `Smart Farmer is an AI-driven agricultural web solution designed to assist farmers in maintaining crop health. It enables users to upload leaf images, automatically detect diseases, and receive instant treatment recommendations, contributing to higher crop yield and sustainable farming.`,

    features: [
      "🌿 Image-Based Disease Detection using leaf images",
      "🧠 Machine Learning integration for multi-disease classification",
      "💊 Treatment & fertilizer recommendations",
      "📊 Disease analytics and visualization",
      "🌎 Responsive web interface",
      "🔐 Role-based secure access",
    ],

    techStack: ["Python", "Machine Learning", "Flask/Django", "React"],

    highlights:
      "Combines modern frontend technologies with AI-powered backend services for accurate disease detection and fast responses.",

    developmentModel:
      "Incremental Model focusing first on disease detection, followed by analytics and community modules.",

    futureEnhancements: [
      "Voice-based assistance",
      "Multilingual support",
      "Weather forecasting",
      "IoT-based soil monitoring",
    ],
  },
  {
    id: 2,
    title: "Tourism Management System (Startup Project)",
    shortDesc: "End-to-end web platform designed to simplify and digitize the process of booking, managing, and exploring tourism services.",
    img: wanderWithWorldImg,
    githubLink: "https://github.com/devurmil/Wander-With-World",
    liveLink: "https://wander-with-world.vercel.app/",
    description: `The Tourism Management System is an end-to-end web platform designed to simplify and digitize the process of booking, managing, and exploring tourism services. It provides an efficient system for travelers, tour operators, and administrators to interact through a single, integrated interface.`,

    features: [
      "🏞️ Tour Package Management: Browse, filter, and book customizable tour packages with real-time availability.",
      "👤 User Authentication: Secure login, registration, and role-based access for users and admins.",
      "💳 Payment Integration: Supports online payments with receipts and booking confirmations.",
      "📊 Admin Dashboard: Centralized interface to manage users, destinations, and transactions.",
      "📅 Booking Tracker: View upcoming trips, manage cancellations, and access travel history.",
      "📨 Notification System: Sends automated booking and confirmation alerts via email.",
    ],

    techStack: ["Node.js", "React", "Prisma", "MySQL"],

    highlights:
      "Built with a focus on scalability and user convenience, the system uses React for an interactive frontend and Node.js with Prisma ORM for secure and optimized backend operations. MySQL ensures reliable data management and smooth transaction handling.",

    developmentModel:
      "Implemented using the Incremental Model, allowing modular development and testing of components like booking, payment, and admin management in separate iterations.",

    futureEnhancements: [
      "Integration of AI-driven tour recommendations, multilingual support, travel insurance linking, and a chatbot-based query assistant to improve customer experience and accessibility.",
    ],
  },
  {
    id: 3,
    title: "Rakshak (Women’s Safety App)",
    shortDesc: "Real-time women’s safety application built to provide immediate help in emergency situations.",
    img: rakshakImg,
    description: `Rakshak is a real-time women’s safety application built to provide immediate help in emergency situations. It empowers users by combining rapid alert systems, location tracking, and safety features in one seamless interface. The app’s main goal is to ensure that women can access help within seconds, wherever they are.`,

    features: [
      "🚨 Panic Button & Side-Button Trigger: Instantly alert emergency contacts and nearby authorities with a single tap or side-button gesture.",
      "📍 Live Location Sharing: Continuously shares the user’s location with trusted contacts during emergencies.",
      "🗺️ Safe Zone Map: Displays nearby police stations, hospitals, and safe zones for quick navigation.",
      "🗣️ Multilingual 24x7 Helpline: Offers real-time assistance in multiple Indian languages for better accessibility.",
      "📞 Custom Emergency Contacts: Users can pre-register trusted contacts for faster alerts.",
      "⚙️ Gesture-Based Activation: Allows discreet help requests through shake or gesture recognition.",
      "🔒 Secure Data Handling: Ensures privacy through encrypted user data and safe communication protocols.",
    ],

    techStack: ["Prototype Only"],

    highlights:
      "Rakshak combines mobile technology with geolocation intelligence to enhance public safety. The app’s backend ensures real-time synchronization of alerts, while the frontend offers a user-friendly and intuitive interface. It focuses on reliability, performance, and minimal response time to ensure user trust and safety.",

    developmentModel:
      "Designed using the Incremental Model, each release introduced new features such as map integration, voice activation, and secure messaging to ensure stepwise testing and optimization.",

    futureEnhancements: [
      "Planned features include AI-based threat detection, smartwatch integration, predictive location tracking, and community alert networks to create a connected safety ecosystem.",
    ],
  },
  {
    id: 4,
    title: "Delish Diaries (Recipe Website)",
    shortDesc: "Dynamic recipe-sharing platform that allows users to explore, create, and manage recipes effortlessly.",
    img: delishImg,
    description: `Delish Diaries is a dynamic recipe-sharing platform that allows users to explore, create, and manage recipes effortlessly. It promotes a community-driven cooking experience by enabling users to share culinary creations, comment on recipes, and connect with food enthusiasts worldwide.`,

    features: [
      "👩‍🍳 User Management: Secure registration, login, and profile customization.",
      "📜 Recipe Management: Add, edit, and delete personal recipes with images and ingredients.",
      "💬 Interactive Comments: Users can engage by commenting, liking, or sharing recipes.",
      "🌐 Social Integration: Seamless sharing across platforms for better visibility.",
      "📊 Database Connectivity: Oracle Database used for efficient data storage and retrieval.",
      "🧩 Development Model: Built using the Incremental Model for systematic feature rollout.",
    ],

    techStack: ["HTML", "CSS", "JavaScript", "Oracle Database"],

    highlights:
      "The website emphasizes usability, aesthetic design, and performance optimization. It includes responsive layouts, smooth navigation, and well-structured data flow between frontend and backend components.",

    developmentModel:
      "",

    futureEnhancements: [
      "Plans to integrate personalized recipe recommendations using AI, enable meal-planning tools, and support real-time chat for community discussions.",
    ],
  },
];

export default ProjectsData;
