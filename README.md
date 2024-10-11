# Inventory Application

A CRUD inventory app built with Express, Node, EJS, and PostgreSQL.

## Routes

### Categories

- **GET /**  
  Home Page

- **GET /categories**  
  List of all categories

- **GET /categories/:categoryId**  
  View a specific category page

- **GET /categories/new**  
  HTML form to create a new category

- **POST /categories/new**  
  Add a new category to the list of categories

- **GET /categories/:categoryId/update**  
  HTML form to update an existing category

- **POST /categories/:categoryId/update**  
  Update an existing category

- **POST /categories/:categoryId**  
  Delete a specific category

### Items

- **GET /categories/:categoryId/items**  
  List of all items in a specific category

- **GET /categories/:categoryId/items/:itemId**  
  View a specific item page

- **GET /categories/:categoryId/items/new**  
  HTML form to create a new item

- **POST /categories/:categoryId/items/new**  
  Add a new item to the specific category

- **GET /categories/:categoryId/items/:itemId/update**  
  HTML form to update an existing item

- **POST /categories/:categoryId/items/:itemId/update**  
  Update an existing item

- **POST /categories/:categoryId/items/:itemId**  
  Delete a specific item

## Database

- Uses PostgreSQL for data storage.
- Includes two main tables:
  - **Categories**: Stores category information with fields for `id`, `name`, and `description`.
  - **Items**: Stores item information with fields for `id`, `name`, `description`, `quantity`, `price`, and a foreign key reference to categories `category_id`.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Configure your database connection in the `.env` file.
4. Run the initialization script to set up the database: `psql -U your_username -d your_database -f init.sql`.
5. Start the application: `npm start`.
