-- Day 7 - SQL - Task
USE sherif;

-- 1. Create customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

-- Create customer_orders table with foreign key
CREATE TABLE customer_orders (
    order_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    amount DECIMAL(10,2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 2. Insert 5 customers
INSERT INTO customers VALUES
(1, 'Mohamed', 'Chennai'),
(2, 'Rahul', 'Mumbai'),
(3, 'Arun', 'Delhi'),
(4, 'Swami', 'Bangalore'),
(5, 'Kiran', 'Hyderabad');

-- Insert 5 orders
INSERT INTO customer_orders VALUES
(101, 'Laptop', 55000, 1),
(102, 'Mobile', 20000, 2),
(103, 'Headphones', 3000, 1),
(104, 'Keyboard', 1500, 3),
(105, 'Mouse', 800, 4);

-- Display tables
SELECT * FROM customers;
SELECT * FROM customer_orders;

-- 3. INNER JOIN
SELECT customers.customer_name,
       customer_orders.product_name,
       customer_orders.amount
FROM customers
INNER JOIN customer_orders
ON customers.customer_id = customer_orders.customer_id;

-- 4. LEFT JOIN
SELECT customers.customer_name,
       customer_orders.product_name,
       customer_orders.amount
FROM customers
LEFT JOIN customer_orders
ON customers.customer_id = customer_orders.customer_id;

-- 5. Example of converting repeating groups into 2NF

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);

CREATE TABLE subjects (
    subject_id INT PRIMARY KEY,
    subject_name VARCHAR(50),
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- 6. Example of 3NF

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    department_name VARCHAR(50),
    manager_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Sample Data
INSERT INTO departments VALUES
(1, 'HR', 'Kumar'),
(2, 'IT', 'Ravi');

INSERT INTO employees VALUES
(1, 'Sherif', 1),
(2, 'Leo', 2);

-- Display 3NF tables
SELECT * FROM departments;
SELECT * FROM employees;