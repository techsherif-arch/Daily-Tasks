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


-- Day 5 - SQL - Task

-- 1. Count total orders
SELECT COUNT(*) AS total_orders
FROM orders;

-- 2. Find the SUM of all order prices
SELECT SUM(price) AS total_price
FROM orders;

-- 3. Find the AVG order price
SELECT AVG(price) AS average_price
FROM orders;

-- 4. Group orders by product_name and show total sales
SELECT product_name,
       SUM(price * quantity) AS total_sales
FROM orders
GROUP BY product_name;

-- 5. Find the MAX and MIN price
SELECT MAX(price) AS maximum_price,
       MIN(price) AS minimum_price
FROM orders;

-- 6. Sort grouped data by total sales descending
SELECT product_name,
       SUM(price * quantity) AS total_sales
FROM orders
GROUP BY product_name
ORDER BY total_sales DESC;