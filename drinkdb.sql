CREATE TABLE drinks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(8, 2),
    description TEXT
);
