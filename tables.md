```
CREATE TABLE turma(  
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    modulo VARCHAR(255) DEFAULT 0
);

CREATE TABLE estudante(  
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255),
    FOREIGN KEY (turma_id) REFERENCES `turma` (id)
);

CREATE TABLE hobby(  
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE estudante_hobby(  
    id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR(255), 
    hobby_id VARCHAR(255),
    FOREIGN KEY(estudante_id) REFERENCES `estudante` (id),
    FOREIGN KEY(hobby_id) REFERENCES `hobby` (id)
);

CREATE TABLE docente(  
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255),
    FOREIGN KEY (turma_id) REFERENCES `turma` (id)
);

CREATE TABLE especialidade(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
)

CREATE TABLE docente_especialidade(  
    id VARCHAR(255) PRIMARY KEY,
    docente_id VARCHAR(255) NOT NULL,
    especialidade_id VARCHAR(255) FOREIGN KEY NOT NULL
    FOREIGN KEY(docente_id) REFERENCES `docente` (id),
    FOREIGN KEY (especialidade_id) REFERENCES `especialidade` (id)
)
```

