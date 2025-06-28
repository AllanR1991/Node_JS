
-- Criando uma tabela;
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- inserindo dados em usuarios
INSERT INTO usuarios(nome, email, idade) VALUES 
("Luis Silva", "luis@luis.com.br", 30),
("Peddro Gabriel", "pedro@pedro.com.br", 18),
("Eva", "eva@eva.com.br", 58)
;

-- exibir os dados da tabela usuario
SELECT * FROM usuarios;


-- Exibr todas as informações da tabela usuarios que contem o nome eva
select * from usuarios where nome = "Eva";  

-- Exibr todas as informações da tabela usuarios que contem idade >= 18
select * from usuarios where idade >= 18;  

-- Deleta todas as informações da tabela
DELETE FROM usuarios;

-- Deleta um registro especifico na tabela com base na condição
DELETE FROM usuarios WHERE nome = "Peddro Gabriel";


-- Atualiza todos os registros do banco
UPDATE usuarios SET nome = "Caua", email = "caua@caua.com.br";


-- Atualização um dado de usuario
UPDATE usuarios SET nome = "Caua", email = "caua@caua.com.br" WHERE nome = "Luis Silva";