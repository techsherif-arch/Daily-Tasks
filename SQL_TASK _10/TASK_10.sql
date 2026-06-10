-- Day 10 - SQL Task

-- 1. Create Employee Table

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Insert Sample Data

INSERT INTO employees VALUES
(1,'John','IT',50000),
(2,'Alice','HR',45000),
(3,'David','Finance',55000);

--------------------------------------------------

-- 2. Stored Procedure to Insert Employee

DELIMITER //

CREATE PROCEDURE InsertEmployee(
    IN p_id INT,
    IN p_name VARCHAR(50),
    IN p_department VARCHAR(50),
    IN p_salary DECIMAL(10,2)
)
BEGIN
    INSERT INTO employees
    VALUES(p_id,p_name,p_department,p_salary);
END //

DELIMITER ;

-- Call Procedure

CALL InsertEmployee(4,'Tom','Sales',40000);

--------------------------------------------------

-- 3. Stored Procedure to Update Salary by ID

DELIMITER //

CREATE PROCEDURE UpdateSalary(
    IN p_id INT,
    IN p_salary DECIMAL(10,2)
)
BEGIN
    UPDATE employees
    SET salary = p_salary
    WHERE id = p_id;
END //

DELIMITER ;

-- Call Procedure

CALL UpdateSalary(4,45000);

--------------------------------------------------

-- 4. Stock and Orders Tables

CREATE TABLE stock (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    quantity INT
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    product_id INT,
    quantity INT
);

INSERT INTO stock VALUES
(101,'Laptop',20),
(102,'Mouse',50);

--------------------------------------------------

-- Trigger to Update Stock After Order

DELIMITER //

CREATE TRIGGER UpdateStockAfterOrder
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE stock
    SET quantity = quantity - NEW.quantity
    WHERE product_id = NEW.product_id;
END //

DELIMITER ;

-- Test Trigger

INSERT INTO orders VALUES (1,101,2);

--------------------------------------------------

-- 5. Users Table

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    role VARCHAR(20)
);

INSERT INTO users VALUES
(1,'admin1','admin'),
(2,'admin2','admin'),
(3,'user1','user');

--------------------------------------------------

-- Trigger to Prevent Deleting Last Admin

DELIMITER //

CREATE TRIGGER PreventLastAdminDelete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
    DECLARE admin_count INT;

    SELECT COUNT(*)
    INTO admin_count
    FROM users
    WHERE role='admin';

    IF OLD.role='admin' AND admin_count=1 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT='Cannot delete the last admin user';
    END IF;
END //

DELIMITER ;

--------------------------------------------------

-- 6. Procedure to Fetch Employees

DELIMITER //

CREATE PROCEDURE FetchEmployees()
BEGIN
    SELECT * FROM employees;
END //

DELIMITER ;

-- Call Procedure

CALL FetchEmployees();

--------------------------------------------------

-- Check Data

SELECT * FROM employees;
SELECT * FROM stock;
SELECT * FROM users;

--------------------------------------------------

-- Drop Procedures

DROP PROCEDURE InsertEmployee;
DROP PROCEDURE UpdateSalary;
DROP PROCEDURE FetchEmployees;

-- Drop Triggers

DROP TRIGGER UpdateStockAfterOrder;
DROP TRIGGER PreventLastAdminDelete;