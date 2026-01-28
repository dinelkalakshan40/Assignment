This repository contains three frontend and backend development projects

1. **Full-Stack User Management System** (Laravel + React + Tailwind CSS)  
2. **Task Management REST API with Authentication** (Node.js + Express )  
3. **Responsive Dashboard Interface** (React + Tailwind CSS)

## Projects

1. **Full-Stack User Management System**  
   - REST API endpoints: list users, create new user, delete user  
   - Validation: name required, email required & unique  
   - React frontend displays users, form to add new users, shows validation errors  
   - Responsive UI with Tailwind CSS  

2. **Task Management REST API with Authentication**  
   - Node.js + Express backend  
   - Endpoints: `POST /login` (mock authentication), `GET /tasks` (protected)  
   - JWT-based authentication with middleware  
   - Proper HTTP status codes & JSON responses  

3. **Responsive Dashboard Interface**  
   - React frontend using a static JSON dataset for cards  
   - Search/filter functionality  
   - Conditional rendering (active vs inactive cards)  
   - Responsive grid layout with hover & focus states using Tailwind CSS

---

## Run Projects 

**laravel project**  
   - cd user-management-backend
   - composer install
   - cp .env.example .env          
   - php artisan migrate
   - php artisan serve

**React-project**  
   - cd user-management-frontend
   - npm install
   - npm run dev

**node-api**
   - cd task-api
   - npm install
   - cp .env.example .env
   - node index.js

**Responsive-Dashboard**
   - npm install
   - npm run dev

