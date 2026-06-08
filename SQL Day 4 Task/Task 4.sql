-- Day 4 - SQL - Task
use sherif;
-- 1. Create table
CREATE TABLE orders (
    id INT PRIMARY KEY,
    product_name VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2)
);

-- 2. Insert 5 records
INSERT INTO orders (id, product_name, quantity, price) VALUES
(1, 'Apple Juice', 3, 120),
(2, 'Banana Chips', 2, 80),
(3, 'Avocado', 5, 450),
(4, 'Mango Drink', 1, 150),
(5, 'Almonds', 4, 600);

-- Display all records
SELECT * FROM orders;

-- 3. Select orders where quantity > 2
SELECT * FROM orders
WHERE quantity > 2;

-- 4. Select orders where price is between 100 and 500
SELECT * FROM orders
WHERE price BETWEEN 100 AND 500;

-- 5. Fetch orders with product_name starting with 'A'
SELECT * FROM orders
WHERE product_name LIKE 'A%';

-- 6. Fetch orders sorted by quantity in descending order
SELECT * FROM orders
ORDER BY quantity DESC;