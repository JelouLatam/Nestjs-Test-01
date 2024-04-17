CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASSWORD}';
GRANT SELECT, INSERT, UPDATE, DELETE ON test_db.* TO '${DB_USER}'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE IF NOT EXISTS task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status ENUM('pending', 'in_progress', 'completed') NOT NULL
);
