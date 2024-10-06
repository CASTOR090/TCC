CREATE TABLE usuarios (
    id	BIGINT IDENTITY PRIMARY KEY,
    nome_usuario VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,  -- Vamos armazenar a senha criptografada
);