Taste & Rate is a web application where users can review businesses and share their experiences. It utilizes Next.js with React and JSX for the frontend and Django's Django Rest Framework (DRF) for the backend. JWT tokens are used for authentication.

![Taste & Rate Logo](./logo.png)

## Project Structure 📁

./
├── backend/ # Django backend
│ ├── db.sqlite3 # SQLite database
│ ├── manage.py # Django management script
│ ├── mydatabase/ # Database related files
│ ├── pdm.lock # Python dependency lock file
│ ├── pycache/ # Python bytecode cache
│ ├── pypackages/ # PDM packages
│ ├── pyproject.toml # PDM project configuration
│ ├── README.md # Backend README
│ ├── reviews/ # Django app for reviews
│ ├── taste_n_rate/ # Django project settings
│ └── tests/ # Test cases
├── frontend/ # Next.js frontend
│ ├── jsconfig.json # JavaScript configuration
│ ├── next.config.mjs # Next.js configuration
│ ├── node_modules/ # Node.js dependencies
│ ├── package.json # Node.js package file
│ ├── package-lock.json # Node.js package lock file
│ ├── postcss.config.js # PostCSS configuration
│ ├── public/ # Public assets
│ ├── README.md # Frontend README
│ ├── src/ # Source code
│ └── tailwind.config.js # Tailwind CSS configuration
├── LICENSE # Project license
└── README.md # Main README

markdown


## Technologies Used 💻

- **Frontend:**
  - Next.js
  - React
  - JSX
  - Tailwind CSS

- **Backend:**
  - Django
  - Django Rest Framework (DRF)
  - SQLite

## Setup Instructions 🛠️

1. **Clone the repository:**
    ```bash
    git clone https://github.com/bagoviggo/Taste_n_Rate.git
    ```

2. **Backend Setup:**
    ```bash
    cd backend/
    # Assuming you have PDM installed
    pdm install   # Install Python dependencies
    python manage.py migrate   # Apply migrations
    python manage.py runserver   # Run Django development server
    ```

3. **Frontend Setup:**
    ```bash
    cd frontend/
    npm install   # Install Node.js dependencies
    npm run dev   # Start Next.js development server
    ```

4. **Access the Application:**
    - Frontend: http://localhost:3000
    - Backend: http://localhost:8000

## Contributing 🤝

Contributions are welcome! Feel free to open issues and pull requests.

## License 📝

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Roy Kip]("https://www.linkedin.com/in/roykiplagat")
