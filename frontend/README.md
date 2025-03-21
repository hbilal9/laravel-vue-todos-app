# Botsify Vue Frontend

This is the frontend application for the Botsify project built with Vue.js.

## Requirements

- Node.js >= 18
- npm or yarn

## Installation

1. Navigate to the frontend directory:
   ```
   cd /laravel-vue-todos-app/frontend
   ```

2. Install dependencies:
   ```
   npm install
   # or if using yarn
   yarn install
   ```

3. Copy the environment file:
   ```
   cp .env.example .env
   ```

4. Configure your API endpoint in the `.env` file:
   ```
   VUE_APP_API_URL=http://localhost:8000/api
   ```

## Development Server

Start the development server:
```
npm run serve
# or if using yarn
yarn serve
```

The application will be accessible at http://localhost:5173.

## Features

- Responsive UI
- Todo management

## Connecting to Backend

This frontend application is designed to work with the Botsify Laravel Backend. Make sure the backend server is running before using the frontend application.

## License

[MIT](LICENSE)
