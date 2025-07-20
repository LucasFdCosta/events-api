# Events API

## Project Description

Events API is a React application for creating, and managing events. It interacts with a backend API to fetch and update event data.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Concepts](#Concepts)

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation
1. Clone the repo:
   ```sh
   git clone events-api
   ```
2. Navigate into the project directory:
   ```sh
   cd frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Navigate into the backend API:
   ```sh
   cd ..
   cd backend
   ```
6. Install dependencies:
   ```sh
   npm install
   ```
7. Start the local server:
   ```sh
   npm start
   ```

## Usage
After starting the development server, open your browser and go to `http://localhost:3000` (or the port specified in your setup). You can view a list of events, see event details, create new events, and edit existing ones. The frontend communicates with the backend API at `http://localhost:8080` which also should be running at the time.

## Features
- List all events
- View detailed event information
- Create new events with image upload and rich text descriptions
- Edit and delete existing events

## Concepts
- React (functional components, hooks)
- Routing with `react-router-dom` 
   - `BrowserRouter`
   - `Route`
   - `Link`
   - `useNavigate`
   - `useNavigation`
   - `loader()` and `action()`
   - `Await`
   - `Form`
- Error handling and notifications
- Accessibility best practices
