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

- **PATCH /categories/:categoryId/update**  
  Update an existing category after authentication

- **DELETE /categories/:categoryId**  
  Delete a specific category after authentication

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

- **PATCH /categories/:categoryId/items/:itemId/update**  
  Update an existing item after authentication

- **DELETE /categories/:categoryId/items/:itemId**  
  Delete a specific item after authentication

### Authentication Flow

- Users are redirected to the `/authenticate` page if they attempt to update or delete a category or item without being authenticated.
- On the authentication page, users enter a secret password.
- The entered password is checked against the stored password in the database.
- Upon successful authentication, users are redirected back to their original request URL.

## Database

- Uses PostgreSQL for data storage.
- Includes two main tables:
  - **Categories**: Stores category information with fields for `id`, `name`, and `description`.
  - **Items**: Stores item information with fields for `id`, `name`, `description`, `quantity`, `price`, and a foreign key reference to categories.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Configure your database connection in the `.env` file.
4. Run the initialization script to set up the database: `psql -U your_username -d your_database -f init.sql`.
5. Start the application: `npm start`.
