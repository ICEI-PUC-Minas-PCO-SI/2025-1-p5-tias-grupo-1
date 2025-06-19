# Metodologia

> 📎 Pré-requisitos: [Especificação do projeto](02-Especificacao.md)

O desenvolvimento do projeto foi baseado em uma metodologia ágil, utilizando o framework **Scrum** adaptado para fins acadêmicos. A equipe se organizou em **Sprints quinzenais**, com papéis rotativos e entregas incrementais. O GitHub foi a ferramenta central para controle de versão, documentação, organização de tarefas e acompanhamento do progresso.

---

## Controle de Versão

A ferramenta de versionamento utilizada foi o [Git](https://git-scm.com/), com repositório hospedado no [GitHub](https://github.com/ICEI-PUC-Minas-PCO-SI/2025-1-p5-tias-grupo-1).

### 📁 Branches

- `main`: versão estável em produção
- `dev`: versão de desenvolvimento contínuo
- `feature/*`: novas funcionalidades
- `hotfix/*`: correções emergenciais
- `docs`: documentação do projeto

### 📝 Padrão de commits

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alterações na documentação
- `style:` ajustes de formatação
- `refactor:` refatorações de código
- `test:` criação ou modificação de testes

### 🧩 Gestão de Issues

- `feature`: nova funcionalidade
- `bug`: erro ou falha no sistema
- `enhancement`: melhoria de uma funcionalidade existente
- `documentation`: ajustes na documentação
- `question`: dúvidas/discussões

As tarefas foram organizadas usando o recurso **GitHub Projects**, com as colunas: `Backlog`, `Em andamento`, `Revisão` e `Concluído`.

---

## Planejamento do Projeto

### 🔄 Divisão de papéis

#### Sprint 1
- *Scrum Master*: Arthur
- Prototipação (Figma): Natalia
- Requisitos e documentação: Derick
- Modelagem de dados: Vinícius
- Front-end inicial: Matheus
- Back-end inicial: André

#### Sprint 2
- *Scrum Master*: Derick
- Front-end (React): Arthur e Matheus
- Back-end (API): André
- Banco de dados e autenticação: Vinícius
- Documentação técnica: Natalia

---

### 📋 Quadro de Tarefas

**Atualizado em: 10/06/2025**

| Responsável | Tarefa / Requisito                  | Iniciado em | Prazo     | Status | Concluído em |
|-------------|-------------------------------------|-------------|-----------|--------|--------------|
| Derick      | Modelagem base de dados + ER        | 20/05/2025  | 30/05/2025| ✔️     | 28/05/2025   |
| Arthur      | Página inicial do site              | 22/05/2025  | 05/06/2025| 📝     |              |
| Vinícius    | API de login e autenticação (JWT)   | 25/05/2025  | 10/06/2025| ✔️     | 09/06/2025   |
| Natalia     | Prototipação no Figma               | 15/05/2025  | 25/05/2025| ✔️     | 23/05/2025   |
| Matheus     | Página de doações                   | 01/06/2025  | 15/06/2025| ⌛     |              |
| André       | Integração API + SQL Server         | 28/05/2025  | 12/06/2025| 📝     |              |

**Legenda**:
- ✔️: concluído
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado

---

## 🌀 Processo Scrum

- Sprints quinzenais
- Reuniões semanais de acompanhamento
- Tarefas registradas e organizadas via *GitHub Projects*
- Código versionado com revisões por *pull requests*
- Comunicação via WhatsApp e GitHub Issues

---

## Relação de Ambientes de Trabalho

| Ambiente                            | Plataforma                         | Link de acesso                                                                 |
|-------------------------------------|------------------------------------|--------------------------------------------------------------------------------|
| Repositório de código fonte         | GitHub                             | [Repositório GitHub](https://github.com/ICEI-PUC-Minas-PCO-SI/2025-1-p5-tias-grupo-1) |
| Documentação do projeto             | GitHub Wiki / Markdown             | Mesmo link acima                                                              |
| Projeto de interface (protótipos)  | Figma                              | [Protótipos Figma](https://www.figma.com/design/HGYbs8drjvyoYrVpfO0soK/Projeto-Mucuri-Template) |
| Gerenciamento de tarefas            | GitHub Projects                    | Acessível no repositório                                                      |
| Hospedagem do front-end             | Vercel                             | *(link será adicionado após o deploy)*                                        |
| Hospedagem do back-end              | Microsoft Azure                    | *(link será adicionado após o deploy)*                                        |
