# Arquitetura da solução

![Arquitetura da Solução](images/Processo.png)

## Diagrama de classes

O diagrama de classes ilustra graficamente a estrutura do software e como cada uma das classes estará interligada. Essas classes servem de modelo para materializar os objetos que serão executados na memória.

![Arquitetura da Solução](images/diagramaUML.png)

##  Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam realizar o cadastro de dados e os controles associados aos processos identificados, assim como suas recuperações.

Utilizando a notação do DER (Diagrama Entidade-Relacionamento), elabore um modelo, usando alguma ferramenta, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar também o controle de acesso dos usuários (partes interessadas nos processos) de acordo com os papéis definidos nos modelos do processo de negócio.

Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos.

### Modelo ER

![Arquitetura da Solução](images/modeloER.png)

### Esquema relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 

![Exemplo de um modelo relacional](images/modelo_relacional.png "Exemplo de modelo relacional.")
---

> **Links úteis**:
> - [Criando um modelo relacional - documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/12.0.0?topic=designer-creating-relational-model)

### Modelo físico

Insira aqui o script de criação das tabelas do banco de dados.

Veja um exemplo:

```sql server
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
```
Esse script deverá ser incluído em um arquivo .sql na pasta [de scripts SQL](../src/db).


## Tecnologias


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| Front-end      | React.js |
| Back-end       | ASP.NET Core Web API (C#)         |
| SGBD           | SQL SERVER           |
| Deploy Front        | Vercel          |
| SGBD Back          | Microsoft Azure           |
| Controle da versão           | Github          |


## Hospedagem

### Back-end
Hospedado na plataforma Microsoft Azure

### Front-end
Publicado utilizando Vercel

## ✅ Qualidade de Software

A qualidade do software especifica características e subcaracterísticas que devem ser observadas no desenvolvimento de sistemas com foco na satisfação do usuário e na confiabilidade do produto.

### 🎯 Subcaracterísticas Adotadas

| Característica     | Subcaracterística        | Justificativa |
|--------------------|--------------------------|----------------|
| **Usabilidade**    | Apreensibilidade         | Interface intuitiva para facilitar o aprendizado dos usuários da instituição Mucuri. |
| **Confiabilidade** | Maturidade               | Redução de falhas por meio de testes internos rigorosos antes da implantação. |
| **Eficiência de Desempenho** | Tempo de Resposta | Monitoramento ativo do tempo de resposta durante a fase inicial de produção. |
| **Manutenibilidade** | Modularidade           | Arquitetura modular facilita a manutenção, correção de bugs e evolução da aplicação. |

### 📏 Métricas para Avaliação da Qualidade

- ⏱️ **Tempo médio de resposta** por requisição.
- ❌ **Taxa de erros/falhas** reportadas semanalmente.
- 🛠️ **Tempo médio de resolução** de bugs.
- 📊 **Índice de satisfação** dos usuários após o treinamento (via formulário de feedback).
