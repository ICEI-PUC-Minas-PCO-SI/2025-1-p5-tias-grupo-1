# Plano de Testes de Software

> 📎 Pré-requisitos: [Especificação do projeto](02-Especificacao.md), [Projeto de interface](05-Projeto-interface.md)

O plano de testes de software foi elaborado com base nos requisitos funcionais definidos e nos protótipos de interface desenvolvidos. Os testes visam garantir que a aplicação atenda às funcionalidades esperadas, com usabilidade e segurança. Cada caso de teste está associado a um requisito previamente mapeado.

A seguir, listamos os principais **casos de teste**, com seus objetivos, passos a serem seguidos e critérios de êxito.

---

## ✅ Casos de Teste

| **Caso de teste**  | **CT-001 – Cadastrar voluntário**  |
|:---: |:---: |
| Requisito associado | RF-004 – A aplicação deve permitir que usuários interessados preencham um formulário para inscrição como voluntários. |
| Objetivo do teste | Verificar se o usuário consegue se inscrever como voluntário com sucesso. |
| Passos | - Acessar a página inicial <br> - Clicar em "Seja voluntário" <br> - Preencher os dados obrigatórios (nome, e-mail, área de interesse etc.) <br> - Enviar formulário |
| Critério de êxito | - A inscrição é registrada e uma mensagem de confirmação é exibida. |
| Responsável pela elaboração do caso de teste | Derick Lucas Alves Rodrigues |

---

| **Caso de teste**  | **CT-002 – Efetuar login (administrador)** |
|:---: |:---: |
| Requisito associado | RF-007 – A aplicação deve possuir uma área administrativa com autenticação via login e senha. |
| Objetivo do teste | Verificar se o administrador consegue acessar o painel administrativo. |
| Passos | - Acessar o botão "Entrar" <br> - Inserir e-mail e senha previamente cadastrados <br> - Clicar em "Login" |
| Critério de êxito | - A tela do painel administrativo é carregada corretamente após o login. |
| Responsável pela elaboração do caso de teste | Arthur Parreiras Lage Martins |

---

| **Caso de teste**  | **CT-003 – Registrar nova doação** |
|:---: |:---: |
| Requisito associado | RF-003 – A aplicação deve disponibilizar instruções e formulário para doações. |
| Objetivo do teste | Verificar se é possível enviar uma intenção de doação com sucesso. |
| Passos | - Acessar a seção "Doe agora" <br> - Escolher tipo de doação (financeira/material) <br> - Preencher nome e valor ou item <br> - Clicar em "Enviar" |
| Critério de êxito | - Formulário é enviado e uma mensagem de agradecimento aparece na tela. |
| Responsável pela elaboração do caso de teste | Natalia Pereira da Silva |

---

| **Caso de teste**  | **CT-004 – Cadastrar associado (admin)** |
|:---: |:---: |
| Requisito associado | RF-005 – O sistema deve permitir cadastro, edição e exclusão de associados. |
| Objetivo do teste | Verificar se o administrador consegue cadastrar um novo associado com dados válidos. |
| Passos | - Fazer login como administrador <br> - Navegar até a seção "Associados" <br> - Clicar em "Novo" <br> - Preencher os dados do associado <br> - Clicar em "Salvar" |
| Critério de êxito | - O associado aparece listado na tabela e o sistema confirma o cadastro. |
| Responsável pela elaboração do caso de teste | Vinícius Célio Fontes Ribeiro |

---

| **Caso de teste**  | **CT-005 – Visualizar cursos disponíveis** |
|:---: |:---: |
| Requisito associado | RF-002 – O sistema deve exibir os cursos profissionalizantes com descrição e datas. |
| Objetivo do teste | Verificar se os cursos cadastrados aparecem corretamente para o visitante. |
| Passos | - Acessar a página inicial <br> - Clicar em "Cursos" <br> - Verificar a lista de cursos exibidos |
| Critério de êxito | - Os cursos são exibidos corretamente com suas informações e datas. |
| Responsável pela elaboração do caso de teste | Matheus Antônio Valentin Freitas |

---

## 🛠️ Ferramentas de Testes (opcional)

Durante o projeto, utilizamos os seguintes recursos para auxiliar na execução e documentação dos testes:

- **Google Forms**: para feedback de usabilidade de usuários reais.
- **Excel / Google Sheets**: para controle dos testes manuais.
- **Capturas de tela (via Figma e navegador)**: para validar layout e fluxos esperados.
- **DevTools (Chrome)**: para inspeção de elementos e simulação de comportamento.
- **Postman**: para testar endpoints da API back-end.

---

## 📚 Referências

- [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
- [Teste de software: conceitos e tipos](https://blog.onedaytesting.com.br/teste-de-software/)
- [Ferramentas para testes JavaScript](https://geekflare.com/javascript-unit-testing/)
- [UX Tools – Testes com usuários](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
