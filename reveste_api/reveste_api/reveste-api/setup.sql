-- Script para criar o banco de dados no phpMyAdmin do XAMPP

CREATE DATABASE IF NOT EXISTS reveste_db;
USE reveste_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user'
);

-- Inserir um usuário de teste
INSERT INTO usuarios (nome, email, senha, role) 
VALUES ('Administrador', 'admin@reveste.com', '123456', 'admin')
ON DUPLICATE KEY UPDATE email=email;

INSERT INTO usuarios (nome, email, senha, role) 
VALUES ('Usuário Teste', 'teste@reveste.com', '123', 'user')
ON DUPLICATE KEY UPDATE email=email;
