-- Day 8 - SQL - Task
USE sherif;

-- Create employee_details table
CREATE TABLE employee_details (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Insert sample employee data
INSERT INTO employee_details VALUES
(1, 'Mohamed', 'IT', 50000),
(2, 'Rahul', 'HR', 35000),
(3, 'Arun', 'IT', 60000),
(4, 'Swami', 'Sales', 45000),
(5, 'Kiran', 'HR', 30000);

-- Create products table
CREATE TABLE products_info (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2)
);

-- Insert sample product data
INSERT INTO products_info VALUES
(1, 'Laptop', 55000),
(2, 'Mobile', 20000),
(3, 'Mouse', 800),
(4, 'Keyboard', 1500),
(5, 'Headphones', 3000);

-- 1. Employees with salary greater than average salary
SELECT *
FROM employee_details
WHERE salary > (
    SELECT AVG(salary)
    FROM employee_details
);

-- 2. Products with price higher than the cheapest order
SELECT *
FROM products_info
WHERE price > (
    SELECT MIN(amount)
    FROM customer_orders
);

-- 3. Customers who have orders
SELECT *
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM customer_orders
);

-- 4. Subquery inside SELECT to show order counts
SELECT customer_name,
       (
           SELECT COUNT(*)
           FROM customer_orders
           WHERE customer_orders.customer_id = customers.customer_id
       ) AS total_orders
FROM customers;

-- 5. Correlated subquery to find highest salary per department
SELECT *
FROM employee_details e1
WHERE salary = (
    SELECT MAX(salary)
    FROM employee_details e2
    WHERE e1.department = e2.department
);

-- 6. Check if a product exists
SELECT product_name
FROM products_info
WHERE EXISTS (
    SELECT *
    FROM products_info
    WHERE product_name = 'Laptop'
);