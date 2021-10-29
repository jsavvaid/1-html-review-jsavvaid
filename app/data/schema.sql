-- SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS jsavvaid;

USE jsavvaid; -- Switch Databases

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
	title varchar(75),
	author varchar(30),
	yearPublished int,
    publisher varchar(30),
	pageCount int,
	msrp varchar(5)
	);

INSERT INTO books (title, author, yearPublished, publisher, pageCount, msrp) VALUES 
('Where the Wild Things Are', 'Maurice Sendak', 1963, 'Harper & Row', 61, '$15'),
('The Cat in the Hat', 'Dr.Seuss', 1957, 'Random House', 40, '$12'),
('the Intelligent Investor', 'Benjamin Graham', 1949, 'HarperBusiness', 640, '$30'),
('The Jordan Rules', 'Sam Smith', 1963, 'Simon & Schuster', 333, '$47');

-- SELECT * FROM books;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';