# Job Listing Web Application

## Project Description
This is a full-stack job listing web application designed to help users find job opportunities. The project consists of:

- **Backend**: Developed using Django REST Framework (DRF) with a MySQL database to store job listings.
- **Frontend**: Built with React for an interactive and user-friendly interface.
- **Scraper**: Uses Scrapy to scrape job listings from Dice and populate the backend database.

The application provides a seamless experience by integrating web scraping, a robust API backend, and an intuitive frontend interface.

---

## Features
- Fetches real-time job data using Scrapy.
- Stores and manages job listings in a MySQL database.
- Displays job data through an interactive React-based frontend.
- REST API to enable data retrieval and updates.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Python 3.8+
- Node.js and npm
- MySQL
- Git

---

### Backend Setup (Django)
1. Clone the repository:
   ```bash
   git clone <repo_url>
   ```
2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
3. Navigate to jobsite
    ```bash
    cd jobsite
    pip install -r requirements.txt
    ```

4. Configure the database in settings.py: Update the DATABASES section with your MySQL credentials.
 
5. Apply database migrations:
   ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
6. Run the server
   ```bash
   python manage.py runserver
   ```
  The backend will now be running at http://127.0.0.1:8000/.


### Scraper Setup (Scrapy)

1. Navigate to the scraper directory:
```bash
cd job_scraper
```
2. Install dependencies:
```bash
pip install -r requirements.txt
```
3. Run the scraper:
```bash
scrapy crawl dice_jobs
```
This will scrape job data from Dice and send it to the Django backend.

### Frontend Setup (React)
1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The frontend will be running at http://localhost:5173/.

### Complete Workflow
- Start the backend server.
- Run the Scrapy spider to scrape job listings.
- Start the React frontend.

### File Structure
```
jobsite/
├── jobs/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   ├── views.py
├── jobsite/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── manage.py
└── requirements.txt

job_scraper/
├── spiders/
│   ├── dice_spider.py
├── __init__.py
├── items.py
├── middlewares.py
├── pipelines.py
├── settings.py
├── requirements.txt
└── scrapy.cfg

frontend/
├── public/
├── src/
├── package.json
└── README.md

```


    
