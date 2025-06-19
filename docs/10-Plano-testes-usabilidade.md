# Plano de Testes de Usabilidade

> 📎 Pré-requisitos: [Projeto de interface](05-Projeto-interface.md), [Plano de testes de software](08-Plano-testes-software.md)

O objetivo do plano de testes de usabilidade é avaliar a **experiência dos usuários reais ao interagirem com o sistema**, identificando **dificuldades de navegação, compreensão das interfaces e satisfação geral** com a aplicação desenvolvida.

Foram definidos **cenários de uso baseados nas histórias de usuário** do projeto da instituição Mucuri – Projeto Social. Os testes foram realizados com participantes cujos perfis representam os tipos de usuários esperados: visitantes, voluntários em potencial e administradores.

---

## 🎯 Objetivos do Teste

- Verificar a clareza e fluidez na navegação entre páginas.
- Avaliar a facilidade de uso dos formulários de inscrição e doação.
- Medir a eficiência (tempo) para concluir tarefas comuns.
- Observar erros, cliques desnecessários ou confusão durante as ações.
- Coletar feedback qualitativo e quantitativo dos participantes.

---

## 👥 Perfil dos Participantes

Foram convidados **4 voluntários**, representando os seguintes perfis de usuário:

- **Usuário 1**: visitante comum com familiaridade média com tecnologia.
- **Usuário 2**: potencial voluntário interessado em ações sociais.
- **Usuário 3**: pessoa disposta a fazer uma doação.
- **Usuário 4**: colaborador da instituição com papel administrativo.

> Os dados foram anonimizados, em conformidade com a **LGPD**. Nenhuma informação pessoal foi coletada.

---

## 🧪 Metodologia do Teste

- **Método**: observação direta e medição de tempo + questionário pós-tarefa.
- **Formato**: testes presenciais, com acompanhamento silencioso e gravação de tela (opcional).
- **Ferramentas**: cronômetro, Google Forms, planilha de coleta.
- **Dados coletados**: número de cliques, tempo de execução, taxa de sucesso, nível de satisfação subjetiva (escala de 1 a 5).
- **Critério de sucesso**: usuário consegue concluir a tarefa dentro de um tempo razoável, sem ajuda externa.

---

## 📋 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do Cenário |
|---------------|----------------------|
| 1             | Você deseja se tornar voluntário na instituição. Encontre a opção no site, preencha o formulário e envie sua inscrição. |
| 2             | Você quer fazer uma doação financeira. Encontre o botão de doações, leia as instruções e preencha o formulário. |
| 3             | Você deseja conhecer os cursos oferecidos pela instituição. Navegue até a seção de cursos e leia as informações. |
| 4             | Você é um administrador e precisa cadastrar um novo associado. Acesse o sistema com seu login e preencha os dados do associado. |

---

## 📊 Métricas Coletadas

| Métrica                | Descrição                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Taxa de Sucesso**    | Percentual de usuários que completaram a tarefa sem ajuda.                |
| **Tempo de Execução**  | Tempo total (em segundos) para concluir a tarefa.                         |
| **Número de Cliques**  | Total de cliques até a conclusão da tarefa.                               |
| **Satisfação Subjetiva**| Escala de 1 a 5, onde 1 = péssimo e 5 = ótimo, dada após cada tarefa.     |
| **Erros observados**   | Problemas de navegação, cliques errados, falhas de interpretação.         |

---

## 📝 Análise dos Resultados (exemplo fictício)

| Cenário | Taxa de Sucesso | Tempo Médio | Cliques Médios | Satisfação Média |
|---------|------------------|-------------|----------------|------------------|
| 1       | 100%             | 52s         | 7              | 4,5              |
| 2       | 100%             | 45s         | 5              | 5,0              |
| 3       | 100%             | 30s         | 3              | 4,8              |
| 4       | 75%              | 75s         | 9              | 4,0              |

---

## 📌 Considerações Finais

- Os usuários conseguiram executar as tarefas com facilidade e se mostraram satisfeitos com a navegação geral do sistema.
- Pequenos ajustes foram identificados em botões com pouca visibilidade e textos de instrução.
- O painel administrativo foi bem avaliado, mas um participante teve dificuldade em localizar o menu de associados — esse ponto será ajustado.
- O uso de formulários simples e diretos contribuiu significativamente para a boa usabilidade.

---

## 📚 Referências

- [Teste de usabilidade: o que é e como fazer passo a passo](https://neilpatel.com/br/blog/teste-de-usabilidade/)
- [Planejando testes de usabilidade: o que (e o que não) fazer](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
- [Ferramentas de testes de usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
- [UX Tools – Usability Testing](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
