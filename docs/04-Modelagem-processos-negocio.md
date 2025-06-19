# Modelagem dos Processos de Negócio

> 📎 Pré-requisitos: [Especificação do projeto](02-Especificacao.md)

> **Links úteis**:
> - [Modelagem de processos AS-IS x TO-BE](https://dheka.com.br/modelagem-as-is-to-be/)
> - [20 dicas práticas de modelagem de processos](https://dheka.com.br/20-dicas-praticas-de-modelagem-de-processos/)

---

## 📌 Modelagem da Situação Atual (AS-IS)

Nesta etapa, apresentamos como os processos atualmente são executados pela instituição **Mucuri – Projeto Social**, antes da introdução do sistema proposto. A maioria das atividades é realizada de forma **manual**, sem automação digital. Entre os principais gargalos, destacam-se:

- Captação de voluntários via conversas informais e formulários impressos.
- Controle de doações feito em planilhas e anotações físicas.
- Atualizações e divulgação de cursos feitas exclusivamente por redes sociais, com alcance limitado.
- Ausência de banco de dados centralizado confiável.
- Falta de relatórios automatizados para auxiliar na tomada de decisões.

> ⚠️ Modelos AS-IS foram desenvolvidos utilizando notação BPMN e podem ser visualizados nos arquivos vinculados abaixo.

---

## 💡 Descrição Geral da Proposta (TO-BE)

A proposta visa **digitalizar e automatizar os principais processos operacionais** da instituição por meio do desenvolvimento de:

- Um **site institucional** para divulgação e captação de apoio.
- Um **painel administrativo** para gestão de voluntários, cursos, eventos e doações.
- Um **banco de dados estruturado** com acesso seguro e persistente.
- Relatórios gerenciais automatizados com indicadores de desempenho.

Essas mudanças reduzem retrabalho, aumentam a organização interna e fortalecem a presença digital da instituição.

> ⚠️ Modelos TO-BE elaborados com notação BPMN estão disponíveis abaixo.

---

## 🧩 Modelagem dos Processos

- [PROCESSO 1 - Captação de Voluntários](./processes/processo-1-capacitacao-voluntarios.md "Detalhamento do processo 1.")
- [PROCESSO 2 - Registro de Doações](./processes/processo-2-registro-doacoes.md "Detalhamento do processo 2.")

> Outros processos podem ser adicionados conforme a ampliação do escopo da solução.

---

## 📊 Indicadores de Desempenho

A seguir, apresentamos os principais indicadores de desempenho (KPIs) definidos para monitorar a eficácia dos processos automatizados no sistema.

| **Indicador**                    | **Objetivo**                                                       | **Descrição**                                                    | **Fonte de Dados**       | **Fórmula de Cálculo**                                         |
|----------------------------------|---------------------------------------------------------------------|------------------------------------------------------------------|---------------------------|----------------------------------------------------------------|
| Percentual de reclamações        | Avaliar quantitativamente a insatisfação dos usuários              | % de reclamações em relação ao total de atendimentos             | Tabela `Reclamacoes`      | número total de reclamações / número total de atendimentos     |
| Taxa de requisições atendidas    | Medir a eficácia na resposta às solicitações dos usuários           | % de requisições atendidas em um determinado período             | Tabela `Solicitacoes`     | (requisicoes atendidas / total de requisições) * 100           |
| Taxa de entrega de material      | Monitorar o desempenho logístico da instituição                     | % de materiais entregues corretamente dentro do prazo            | Tabela `Pedidos`          | (pedidos entregues / total de pedidos) * 100                   |
| Taxa de participação em eventos  | Acompanhar engajamento da comunidade                                | % de inscritos que participaram efetivamente nos eventos         | Tabela `InscricoesEventos`| (participantes presentes / inscritos) * 100                    |
| Crescimento de novos voluntários | Medir o crescimento do corpo voluntário                             | Número de novos cadastros em determinado período                 | Tabela `Usuarios`         | novos voluntários no mês atual - mês anterior                  |

> ℹ️ Os dados acima devem estar representados no diagrama de classes, garantindo a consistência entre modelagem e implementação.
