# DSA Visualizer

A comprehensive interactive graph algorithm visualizer that brings data structure concepts to life through beautiful animations and visualizations.

**Project Started:** January 10, 2026
**Status:** Under Development - Future Roadmap

## Project Overview

DSA Visualizer is an educational tool designed to help students and developers understand graph algorithms through interactive animations. The project visualizes complex graph concepts including Dijkstra's algorithm, Depth-First Search (DFS), Breadth-First Search (BFS), and other graph traversal algorithms with step-by-step animations.

## Technology Stack

### Frontend

- **React** - Modern UI library for building interactive components
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Canvas/SVG** - For rendering and animating graph visualizations

### Backend

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Lightweight web framework for API endpoints
- **MongoDB** - NoSQL database for storing algorithm data and user progress

## Features

- 🎨 **Interactive Graph Visualizations** - Create and manipulate graphs in real-time
- ⚡ **Algorithm Animations** - Step-by-step visualization of:
  - Dijkstra's Algorithm
  - Depth-First Search (DFS)
  - Breadth-First Search (BFS)
  - And more...
- 📊 **Visual Learning** - Animated edges, nodes, and algorithm progression
- 💾 **Data Persistence** - Save and load custom graphs
- 🎯 **Step-by-Step Execution** - Control animation speed and step through algorithms manually

## Project Structure

```
new-project/
├── frontend/          # React-based UI application
│   ├── components/    # React components for graph visualization
│   ├── pages/         # Application pages
│   └── styles/        # Tailwind CSS styles
├── backend/           # Node.js & Express API server
│   ├── routes/        # API endpoints
│   ├── models/        # MongoDB schemas
│   ├── controllers/   # Business logic
│   └── algorithms/    # Graph algorithm implementations
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v24.5+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install frontend dependencies: `cd frontend && npm install`
3. Install backend dependencies: `cd backend && npm install`
4. Configure MongoDB connection
5. Start backend server: `cd backend && npm start`
6. Start frontend development server: `cd frontend && npm start`

## License

This project is a personal self-made visualization project. All rights reserved.

**Usage Policy:**

- This code is intended for personal educational and self-learning use only
- Unauthorized copying, distribution, or commercial use is prohibited
- Permission may be granted for educational visualization purposes upon request
- Contact the author for permission before using or referencing this project
