
create database salesdb;

use salesdb;
create table employees(employeeid int primary key,employeename varchar(50),salary decimal(10,2),departmentid int,managerid int);

insert into employees values
(1,'john',50000,101,null),
(2,'alice',45000,101,1),
(3,'bob',60000,102,1),
(4,'david',35000,102,3),
(5,'emma',70000,103,1),
(6,'chris',55000,103,5);


create table customers( customerid int primary key, customername varchar(50));

insert into customers values
(1,'rahul'),
(2,'priya'),
(3,'kumar'),
(4,'sneha');

create table products(productid int primary key,productname varchar(50),price decimal(10,2));

insert into products values
(1,'laptop',50000),
(2,'mobile',30000),
(3,'tablet',25000),
(4,'printer',15000);

create table orders(orderid int primary key,customerid int,productid int,amount decimal(10,2));

insert into orders values
(101,1,1,1000),
(102,1,2,1500),
(103,1,3,2000),
(104,2,1,1200),
(105,2,2,1800),
(106,3,3,2500),
(107,3,1,1700),
(108,3,2,1400),
(109,4,4,2200);

-- 1. fetch employees whose salary is higher than the department average

select *from employees e
where salary >
(
    select avg(salary)
    from employees
    where departmentid = e.departmentid
);

-- 2. list customers who placed more than 2 orders

select *from customers
where customerid in
(
    select customerid
    from orders
    group by customerid
    having count(*) > 2
);


-- 4. return the total order value per customer

select customerid,
       customername,
(
    select sum(amount)
    from orders o
    where o.customerid = c.customerid
) as totalordervalue
from customers c;

-- 5. list employees earning more than their manager

select *
from employees e
where salary >
(
    select salary
    from employees m
    where m.employeeid = e.managerid
);

-- 6. check if a product exists in the orders table using exists

select *
from products p
where exists
(
    select *
    from orders o
    where o.productid = p.productid
);