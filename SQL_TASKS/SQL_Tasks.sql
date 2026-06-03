-- Day 1 Task
CREATE DATABASE schoolDB1;
USE schoolDB1;
CREATE TABLE students( id INT PRIMARY KEY, name VARCHAR(50), age INT, grade CHAR(1) );
INSERT INTO students(id, name, age, grade) 
VALUES (1, 'Mohamed', 18, 'A'), 
(2, 'Leo', 19, 'B'), 
(3, 'Sherif', 20, 'A'), 
(4, 'Sadham', 18, 'C'), 
(5, 'shanmuga', 21, 'B'),
(6, 'venket', 21, 'I');
SELECT * FROM students;
DROP DATABASE schoolDB;