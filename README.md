<p align="center">
  <h1 align="center">Product Store</h1>
  <p align="center">
    A full-stack product management store for browsing, creating, editing, and deleting products with a modern UI.
  </p>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#technology-stack">Technology Stack</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#api-reference">API Reference</a> •
  <a href="#deployment">Deployment</a>
</p>

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [License](#license)

## Features

- Browse all products on the home page
- Create new products (name, price, image URL)
- Edit existing products inline
- Delete products with confirmation
- Light/dark color mode toggle
- Toast notifications for actions
- Responsive product grid
- Optimistic UI updates with Zustand

## Technology Stack

| Badge         | Purpose                   |
| ------------- | ------------------------- |
| React 19      | Frontend framework        |
| Vite          | Build tool & dev server   |
| Chakra UI v3  | Component library         |
| react-icons   | Iconography               |
| Zustand       | State management          |
| React Router  | Client-side routing       |
| Express 5     | Backend web framework     |
| Mongoose      | MongoDB ODM               |
| MongoDB       | Database                  |
| react-hot-toast | Notifications          |

## Project Structure

```
product-store/
├── backend/
│   ├── config/          # Database and app configuration
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route definitions
│   └── server.js        # Express entry point
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Layout.jsx
│   │   ├── main.jsx
│   │   ├── component/   # Shared components (Navbar, ProductCard)
│   │   ├── components/ui/ # Chakra UI wrappers (provider, color-mode, toaster)
│   │   ├── pages/       # Route pages (HomePage, CreatePage)
│   │   └── store/       # Zustand stores
│   └── package.json
├── package.json
└── README.md
```

## Requirements

- Node.js (v18 or higher)
- MongoDB (local instance or Atlas connection string)
- npm or yarn

## Quick Start

### 1. Install dependencies

From the project root:

```bash
npm install
```

This installs both root and frontend dependencies.

### 2. Configure environment variables

Create a `.env` file at the project root:

```env
PORT=5500
MONGO_URI=mongodb://localhost:27017/product-store
NODE_ENV=development
```

### 3. Run the backend

```bash
npm run dev
```

The API server runs on `http://127.0.0.1:5500`.

### 4. Run the frontend

```bash
cd frontend
npm run dev
```

The Vite dev server proxies `/api` requests to `http://127.0.0.1:5500`.

## Environment Variables

| Variable   | Description              | Default                     |
| ---------- | ------------------------ | --------------------------- |
| `PORT`     | Backend server port      | `5500`                      |
| `MONGO_URI`| MongoDB connection string| `mongodb://localhost:27017/product-store` |
| `NODE_ENV` | Application environment  | `development`               |

## API Reference

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/api/products`    | List all products    |
| POST   | `/api/products`    | Create a product     |
| PUT    | `/api/products/:id`| Update a product     |
| DELETE | `/api/products/:id`| Delete a product     |

## Deployment

Build the frontend for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## License

ISC