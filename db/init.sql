CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (name, description)
VALUES 
('Electronics', 'Devices, gadgets, and accessories'),
('Furniture', 'Home and office furniture'),
('Clothing', 'Apparel and garments');

INSERT INTO items (name, description, quantity, price, category_id)
VALUES 
('Smartphone', 'Latest model smartphone with 128GB storage', 50, 699.99, 1),
('Laptop', '15-inch laptop with 16GB RAM', 30, 999.99, 1),
('Office Chair', 'Ergonomic office chair', 100, 149.99, 2),
('Sofa', 'Comfortable three-seater sofa', 20, 499.99, 2),
('T-shirt', '100% cotton t-shirt', 200, 19.99, 3),
('Jeans', 'Denim jeans with a slim fit', 150, 39.99, 3);

SELECT * FROM categories;
SELECT * FROM items;
