
-- 1. Create Database
CREATE DATABASE companyDB;

-- Use Database
USE companyDB;

-- 2. Create employees table with constraints
CREATE TABLE employees(
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    salary INT DEFAULT 30000,
    email VARCHAR(100) UNIQUE
);

-- 3. UNIQUE constraint already added on email

-- 4. Insert 5 employee records
INSERT INTO employees(id, name, salary, email)
VALUES
(1, 'Arun', 40000, 'arun@gmail.com'),
(2, 'Leo', 35000, 'leo@gmail.com'),
(3, 'Sherif', 50000, 'sherif@gmail.com'),
(4, 'Sadham', 32000, 'sadham@gmail.com'),
(5, 'Richard', DEFAULT, 'richard@gmail.com');

-- View Records
SELECT * FROM employees;

-- 5. Try inserting duplicate email
INSERT INTO employees(id, name, salary, email)
VALUES (6, 'John', 45000, 'john@gmail.com');

-- This will show an error:
-- Duplicate entry 'leo@gmail.com' for key 'employees.email'

-- 6. Drop table
DROP TABLE employees;

-- Recreate table with CHECK constraint
CREATE TABLE employees(
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    salary INT DEFAULT 30000 CHECK(salary > 0),
    email VARCHAR(100) UNIQUE
);

-- Insert sample records
INSERT INTO employees(id, name, salary, email)
VALUES
(1, 'Arun', 40000, 'arun@gmail.com'),
(2, 'Leo', 35000, 'leo@gmail.com');

-- Invalid salary example
INSERT INTO employees(id, name, salary, email)
VALUES
(3, 'John', -5000, 'john@gmail.com');

-- This will show CHECK constraint error


/*-------------------------------------------------------------------Day 3 Task ---------------------------------------------------*/

-- 1. Create products table
CREATE TABLE products(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2)
);

-- 2. Add new column stock
ALTER TABLE products
ADD COLUMN stock INT;

-- 3. Rename column price to unit_price
ALTER TABLE products
CHANGE price unit_price DECIMAL(10,2);

-- 4. Insert 5 product records
INSERT INTO products(id, name, unit_price, stock)
VALUES
(1, 'Laptop', 55000, 10),
(2, 'Mobile', 25000, 15),
(3, 'Keyboard', 1200, 30),
(4, 'Mouse', 800, 25),
(5, 'Monitor', 15000, 8);

-- View products
SELECT * FROM products;

-- 5. Update stock of one product
UPDATE products
SET stock = 20
WHERE id = 2;

-- View updated table
SELECT * FROM products;

-- 6. Delete one product
DELETE FROM products
WHERE id = 4;

-- Final table
SELECT * FROM products;







