## Arquivo .sql

script

CREATE DATABASE mucuri;


USE mucuri;


CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY IDENTITY(1,1),
    Email VARCHAR(100),
    nome VARCHAR(100),
    telefone VARCHAR(15),
    cpf VARCHAR(12),
    perfil INT
);


CREATE TABLE Curso (
    id_curso INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(100),
    [desc] VARCHAR(300)
);


CREATE TABLE associado (
    id_associado INT PRIMARY KEY IDENTITY(1,1),
    id_curso INT,
    id_usuario INT,
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);


CREATE TABLE voluntario (
    id_inscricao INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    tipoVoluntario VARCHAR(100),
    data DATE,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);


CREATE TABLE doacao (
    id_doacao INT PRIMARY KEY IDENTITY(1,1),
    valor FLOAT,
    [desc] VARCHAR(300),
    data DATE,
    item VARCHAR(100)
);


CREATE TABLE Login (
    id INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    email VARCHAR(100),
    senha VARCHAR(40),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);
