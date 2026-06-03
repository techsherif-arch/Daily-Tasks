
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

