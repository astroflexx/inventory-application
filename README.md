# Inventory Application

A CRUD inventory app built with Express, Node, EJS, and PostgreSQL.

## Routes

### Categories

- GET /  
  Home Page

- GET /categories  
  List of all categories

- GET /categories/:categoryId  
  View a specific category page

- GET /categories/new  
  HTML form to create a new category

- POST /categories/new  
  Add a new category to the list of categories

- GET /categories/:categoryId/update  
  HTML form to update an existing category

- PATCH /categories/:categoryId/update  
  Update an existing category

- DELETE /categories/:categoryId  
  Delete a specific category

### Items

- GET /categories/:categoryId/items  
  List of all items in a specific category

- GET /categories/:categoryId/items/:itemId  
  View a specific item page

- GET /categories/:categoryId/items/new  
  HTML form to create a new item

- POST /categories/:categoryId/items/new  
  Add a new item to the specific category

- GET /categories/:categoryId/items/:itemId/update  
  HTML form to update an existing item

- PATCH /categories/:categoryId/items/:itemId/update  
  Update an existing item

- DELETE /categories/:categoryId/items/:itemId  
  Delete a specific item
