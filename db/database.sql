CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE IF NOT EXISTS employees (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
);

DESCRIBE  employees;

INSERT INTO employees VALUES 
(1, 'Alice', 70000),
(2, 'Bob', 50000),
(3, 'Charlie', 60000),
(4, 'Diana', 80000),
(5, 'Ethan', 55000);

SELECT * FROM companydb.employees;

DELETE FROM employees WHERE id = 3;