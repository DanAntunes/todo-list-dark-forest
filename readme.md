# To Do List - Dark Forest Theme

Este projeto é uma aplicação de lista de tarefas (To Do List) com o tema Dark Forest, desenvolvida utilizando HTML, CSS, JavaScript e algumas bibliotecas externas como Bootstrap, Font Awesome e AlertifyJS. A aplicação permite criar, editar, excluir, pesquisar e filtrar tarefas, além de armazená-las no **localStorage** do navegador.

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Licença](#licença)

## Visão Geral

A aplicação foi desenvolvida com o intuito de facilitar o gerenciamento de tarefas diárias. Ao acessar a aplicação, o usuário encontra uma interface intuitiva que permite adicionar novas tarefas, editá-las ou excluí-las conforme a necessidade. As tarefas são persistidas localmente através do **localStorage**, garantindo que os dados não sejam perdidos ao atualizar a página.

## Funcionalidades

- **Adicionar Tarefas:** Ao preencher o título da tarefa e enviar o formulário, é aberto um modal para inserir detalhes adicionais, como descrição, data e a cor da borda que define a prioridade ou categoria.
- **Listagem de Tarefas:** As tarefas são exibidas em uma lista, mostrando seu título, data e status (completa ou pendente). Tarefas concluídas são marcadas visualmente.
- **Marcar Tarefa como Concluída:** É possível marcar ou desmarcar tarefas como concluídas utilizando checkboxes.
- **Editar Tarefas:** O usuário pode editar uma tarefa existente através de um modal que permite alterar título, descrição, data e cor da borda.
- **Excluir Tarefas:** Ao clicar no botão de exclusão, é exibida uma confirmação utilizando o AlertifyJS para evitar exclusões acidentais.
- **Pesquisa e Filtro:** 
  - **Pesquisar:** Um campo de busca permite filtrar as tarefas por título.
  - **Filtrar:** Um menu de seleção possibilita exibir todas as tarefas ou somente as concluídas ou pendentes.
- **Acessibilidade:** A aplicação utiliza atributos ARIA e classes de utilidade para melhorar a experiência de usuários com necessidades especiais.

## Tecnologias Utilizadas

- **HTML5:** Estruturação da página e semântica.
- **CSS3:** Estilização da aplicação. Utilização de um arquivo de reset e estilos customizados para o tema Dark Forest.
- **JavaScript:** Lógica da aplicação, manipulação do DOM e gerenciamento de tarefas.
- **Bootstrap 5:** Layout responsivo e componentes visuais.
- **Font Awesome & Bootstrap Icons:** Ícones para botões e indicações visuais.
- **AlertifyJS:** Exibição de notificações e confirmação de ações (como a exclusão de tarefas).

## Como Usar

1. **Abrir a Aplicação:**
   - Basta abrir o arquivo `index.html` em um navegador moderno (Chrome, Firefox, Edge, etc.). Não é necessário um servidor web, pois os dados são armazenados localmente.

2. **Adicionar uma Nova Tarefa:**
   - Digite o título da tarefa no campo de entrada principal.
   - Clique no botão de adicionar (ícone de “+”), o que abrirá um modal para inserir detalhes adicionais como data, descrição e a cor da borda.
   - Após preencher os dados, clique em "Salvar Tarefa" para adicionar a tarefa à lista.

3. **Visualizar, Editar e Excluir Tarefas:**
   - **Listagem:** As tarefas são exibidas com seus respectivos detalhes. Tarefas concluídas são visualmente diferenciadas.
   - **Editar:** Clique no botão “Editar” da tarefa desejada para abrir o modal de edição. Faça as alterações necessárias e salve.
   - **Excluir:** Clique no botão “Excluir” e confirme a ação na janela de confirmação para remover a tarefa.

4. **Pesquisar e Filtrar:**
   - Utilize o campo de pesquisa para filtrar tarefas por título.
   - Use o menu suspenso de filtro para exibir todas as tarefas, apenas as concluídas ou apenas as pendentes.

## Licença

Este projeto é de uso livre e pode ser utilizado e modificado conforme as necessidades do usuário. Para mais detalhes, consulte o arquivo de licença (se houver).

---

Desenvolvido por **Dan Antunes (DJA)** © 2025.  
Para mais informações, visite o [GitHub do Dan Antunes](https://github.com/DanAntunes).