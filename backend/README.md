# Botsify Laravel Backend

This is the backend API for the Botsify application built with Laravel.

## Requirements

- PHP >= 8.1
- Composer

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/hbilal9/laravel-vue-todos-app 
   cd /laravel-vue-todos-app/backend
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Copy the environment file:
   ```
   cp .env.example .env
   ```

4. Generate application key:
   ```
   php artisan key:generate
   ```

5. Configure your database in the `.env` file:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=botsify
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. Run database migrations:
   ```
   php artisan migrate
   ```

## Development Server

Start the Laravel development server:
```
php artisan serve
```

The API will be accessible at http://localhost:8000.


## License

[MIT](LICENSE)
