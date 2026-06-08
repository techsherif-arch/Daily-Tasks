-- Day 6 - SQL - Task
use sherif ;
-- 1. Create table
CREATE TABLE events (
    id INT PRIMARY KEY,
    event_name VARCHAR(50),
    event_date DATE
);

-- 2. Insert records
INSERT INTO events (id, event_name, event_date) VALUES
(1, 'Tech Fest', '2026-06-10'),
(2, 'Sports Day', '2026-07-15'),
(3, 'Music Show', '2026-08-20'),
(4, 'Food Expo', '2026-09-05'),
(5, 'College Day', '2026-10-01');

-- Display all records
SELECT * FROM events;

-- 3. Display current date and time
SELECT NOW() AS current_date_time;

-- 4. Format event_date using DATE_FORMAT()
SELECT event_name,
       DATE_FORMAT(event_date, '%d-%m-%Y') AS formatted_date
FROM events;

-- 5. Extract YEAR and MONTH from event_date
SELECT event_name,
       YEAR(event_date) AS event_year,
       MONTH(event_date) AS event_month
FROM events;

-- 6. Combine event_name and event_date using CONCAT()
SELECT CONCAT(event_name, ' - ', event_date) AS event_details
FROM events;