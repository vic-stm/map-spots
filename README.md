# 🗺️ Map Spots

Map Spots is a web application built with React and TypeScript that allows users to mark, categorize, and manage points of interest on a map. Users can identify places they have visited or wish to visit, and classify them into categories such as "good for remote work", "ideal for parties", "specialty coffee", and more.

## 📚 Table of Contents

- [🗺️ Map Spots](#️-map-spots)
  - [📚 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [💻 Development](#-development)
    - [📕 Storybook](#-storybook)
  - [🧪 Testing](#-testing)
    - [Unit Tests](#unit-tests)
    - [End-to-End (E2E) Tests](#end-to-end-e2e-tests)
  - [📁 Project Structure](#-project-structure)
  - [🛠️ Troubleshooting](#️-troubleshooting)
  - [📝 License](#-license)

## ✨ Features

- Mark and manage custom spots on a map 📍
- Categorize locations (e.g., remote work, parties, coffee shops) 🏷️
- Built with React, TypeScript, Vite, and TailwindCSS ⚡
- Storybook for UI component development 📖
- End-to-end testing with Playwright 🎭
- Unit testing with Vitest 🧪

## 🚀 Getting Started

### Prerequisites

- Node.js (v22 or higher recommended) 🟢
- npm (v9 or higher recommended) 📦

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vic-stm/map-spots.git
cd map-spots
npm install
```

## 💻 Development

To start the development server with hot reloading:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### 📕 Storybook

To run Storybook for UI component development:

```bash
npm run storybook
```

## 🧪 Testing

### Unit Tests

Run all unit tests with Vitest:

```bash
npm run test
```

To open the Vitest UI:

```bash
npm run test:ui
```

To generate a coverage report:

```bash
npm run test:coverage
```

Then open the [Coverage report](coverage/index.html) file in a browser or use a coverage viewer.

### End-to-End (E2E) Tests

Run Playwright E2E tests:

```bash
npm run e2e
```

To run E2E tests in headed mode with the Playwright UI:

```bash
npm run e2e:ui
```

## 📁 Project Structure

```
.
├── src/
│   ├── components/      # Reusable UI components
│   ├── config/          # App configuration files
│   ├── pages/           # Page-level components
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── e2e/                 # Playwright E2E tests
├── tests-examples/      # Example test files
├── public/              # Static assets
├── package.json         # Project metadata and scripts
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## 🛠️ Troubleshooting

- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json` and reinstalling:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- For Playwright errors, ensure all browsers are installed:
  ```bash
  npx playwright install
  ```
- If Storybook fails to start, check for conflicting ports or clear the `.storybook` cache.
- For TypeScript or Vite errors, ensure your Node.js version matches the recommended version.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
