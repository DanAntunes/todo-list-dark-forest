# Atualizações do ToDo List

Este documento lista as atualizações mais recentes realizadas no projeto **ToDo List Dark Forest Theme**. Cada atualização aprimora a funcionalidade ou adiciona novas features para melhorar a experiência do usuário.

---

## **Atualizações Recentes**

### **18/01 - Modal de Confirmação com Alertify.js**
- **Descrição:** Aprimoramento de uma feature existente.
- **Detalhes:** Implementado um modal de alerta com **Alertify.js** para confirmar a exclusão de tarefas. Isso garante maior segurança ao evitar exclusões acidentais.

---

### **19/01 - Borda de Success para Tarefas Concluídas**
- **Descrição:** Adição de uma nova feature.
- **Detalhes:** Agora, quando uma tarefa for marcada como concluída, ela receberá automaticamente uma borda verde (success), destacando visualmente as tarefas feitas.

- **Código:**
  ```javascript
  if (todo.completed) {
      todoItem.classList.add("border-success");
  }
  ```

---

### **20/01 - Limpeza Automática do Campo de Entrada**
- **Descrição:** Aprimoramento de uma feature já existente.
- **Detalhes:** O campo de entrada de tarefas (**todo-input**) agora é limpo automaticamente após a criação de uma nova tarefa, melhorando a usabilidade.

- **Código:**
  ```javascript
  todoInput.value = "";
  ```

---

### **21/01 - Adição do Input de Data aos Modais**
- **Descrição:** Adição de uma nova feature.
- **Detalhes:** Foi incluído um **input date** nos modais de criação e edição de tarefas. Isso permite que os usuários definam uma data específica para cada tarefa, facilitando o gerenciamento de prazos.

---

### **22/01 - Adição de Lógica ao Campo de Data (Input Date)**

- **Descrição:**  
  Aprimoramento de uma funcionalidade existente para melhorar a usabilidade.

- **Detalhes:**  
  Nos modais de criação e edição de tarefas (*To-Do's*), o campo de entrada de data (**input date**) com o **ID** `task-date` foi atualizado para gerenciar corretamente o valor inserido:

  - **Caso o usuário defina uma data:** O valor será salvo no *To-Do*.  
  - **Caso o usuário não preencha o campo:** Será exibida a mensagem padrão: `"Sem data definida"`.

  Essa melhoria garante que o campo de data seja exibido de forma amigável e funcional em qualquer cenário.

---

### **22/01 - Edição do Campo de Data (Input Date)**

- **Descrição:**  
  Atualização da funcionalidade de edição para permitir modificar a data de uma tarefa existente.

- **Detalhes:**  
  O modal de edição foi ajustado para incluir o campo de entrada de data (**input date**) com o **ID** `edit-task-date`.  
  - **Ao abrir o modal de edição:** O valor do campo de data será preenchido com a data previamente definida no *To-Do* ou deixado em branco, caso nenhuma data tenha sido configurada.  

  Código utilizado para preencher o valor:  
  ```javascript
  const date = document.getElementById("edit-task-date").value;
  document.getElementById("edit-task-date").value = todo.date || "";
  ```
  Além disso, a **class** CSS `todo-date` foi aplicada ao campo de data para estilizar o texto, garantindo que ele seja exibido na cor branca.

---

### **22/01 - Atualização do Rodapé (Footer)**

- **Descrição:**  
  Modificação no rodapé da aplicação para melhorar a apresentação e fornecer um link para o perfil do desenvolvedor.

- **Detalhes:**  
  Foi adicionado um rodapé com a seguinte estrutura em HTML:  
  ```html
  <footer class="bg-dark">
    <p>
      © 2025. Todos Os Direitos Reservados. Feito por Dan Antunes.
      <a href="https://github.com/DanAntunes" target="_blank">DJA</a>.
    </p>
  </footer>
  ```
---

### **23/01 - Organização do Arquivo CSS**

- **Descrição:**  
  Reorganização do arquivo `style.css` em múltiplos arquivos menores e mais específicos para facilitar a manutenção e o crescimento do projeto.

- **Detalhes:**  
  O arquivo original foi dividido em 5 arquivos separados:  
  - **variables.css:** Contém todas as variáveis CSS definidas no `:root`.  
  - **base.css:** Inclui os estilos globais, como `body`, headers, rodapé e elementos básicos.  
  - **components.css:** Abrange os estilos dos componentes principais, como `.todo-container`, `.todo-item`, botões e modais.  
  - **forms.css:** Contém os estilos relacionados a inputs, selects e formulários.  
  - **style.css:** Permanece como o arquivo principal que importa os demais.

---

### **23/01 - Estilização de Itens de Tarefas**

- **Descrição:**  
Atualização dos estilos dos itens de tarefas para melhorar a aparência e a interatividade.

- **Detalhes:**  
 Foi adicionado um novo estilo para os itens de tarefas `.todo-item`. Esse estilo melhora a aparência ao alterar o fundo, a cor do texto e adicionar efeitos de borda e sombra. Além disso, foram incluídos efeitos de transição e hover para uma melhor experiência do usuário.

---

### **03/02 - Otimização da Exibição da Todo List**

- **Descrição:**  
  Atualização na exibição da lista de tarefas para evitar que a página fique muito extensa, implementando um limite de altura e scroll vertical.

- **Detalhes:**  
  - **HTML:**  
    Ajuste na section que contém as tarefas, adicionando classes para melhor espaçamento e arredondamento.
  - **JavaScript:**  
    Atualização das classes dos itens da lista para incluir padding, margin e bordas arredondadas.
  - **CSS:**  
    Definição de um `max-height` para a section e configuração de `overflow-y` para permitir scroll vertical, com pequenas customizações na barra de scroll.

---

### **04/02 - Inclusão do Indicador Visual para Tarefas Concluídas**

- **Descrição:**  
  Atualização na função `renderTodos` para exibir um ícone (✅) ao lado do título das tarefas concluídas, facilitando a identificação dos itens já finalizados.

- **Detalhes:**  
  - **JavaScript:**  
    Foi alterado o template literal que renderiza o título da tarefa. Agora, se a tarefa estiver concluída, o ícone "✅" é adicionado automaticamente.  
    ```javaScript
    <h5 class="d-inline">${todo.title}${todo.completed ? ' ✅' : ''}
    </h5>
    ```
  - Essa modificação permite uma visualização rápida e intuitiva do status das tarefas, sem impactar outras funcionalidades.

---

### **06/02 - Atualização na Estrutura do Projeto**

- **Descrição:**  
  Atualização no cabeçalho e reorganização da estrutura do container de tarefas para aprimorar a semântica e a acessibilidade.

- **Detalhes:**  
  - **Cabeçalho:**  
    O nome do projeto foi alterado para **"To Do List - Dark Forest Theme"**.
  - **Estrutura HTML:**  
    A classe `todo-container` foi movida de `<main>` para uma `<section>` interna, melhorando a organização do conteúdo.

---

### **07/02 - Adição de Animação e Ajustes no Background**

- **Descrição:**  
  Esta atualização implementa novos efeitos visuais e animações para aprimorar a experiência do usuário, incluindo mudanças no background, adição de animações via Sass e CSS, e a inclusão de um script para gerar elementos animados ("fireflies").

- **Detalhes:**  
  - **Background e Layout:**  
    O estilo do `<body>` foi atualizado para incluir uma imagem de fundo, definir o tamanho da imagem e garantir que a altura ocupe 100% da viewport.  
    ```css
    body { 
      color: var(--primary-color);
      background: url('https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg'), var(--bg-color);
      background-size: cover;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    ```  
    *Antes, não havia definição de `background-url`, `background-size` nem `height: 100vh`.*

  - **Animação com Sass e CSS:**  
    Foi criada a classe `.firefly` utilizando Sass para gerar animações dinâmicas e aleatórias, com keyframes personalizados para simular o movimento de vaga-lumes na tela.  
    ```scss
    .firefly {
      position: fixed;
      left: 50%;
      top: 50%;
      width: 0.4vw;
      height: 0.4vw;
      margin: -0.2vw 0 0 9.8vw;
      animation: ease 200s alternate infinite;
      pointer-events: none;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: -10vw;
      }

      // Demais configurações e loop para animação dos elementos...
    }
    ```
  
  - **Marcação do Container de Animação:**  
    O elemento `<body>` agora possui o `id="fireflies-container"`, definindo o container para os efeitos animados.

  - **Inclusão de Script para Gerar "Fireflies":**  
    Adicionado um novo script que cria dinamicamente 15 elementos com a classe `.firefly` dentro do container, possibilitando a exibição dos efeitos animados.  
    ```javascript
    const quantity = 15;
    const container = document.getElementById("fireflies-container");
    for (let i = 0; i < quantity; i++) {
      const div = document.createElement("div");
      div.className = "firefly";
      container.appendChild(div);
    }
    ```
---

### **07/02 - Atualização na Renderização das Tarefas**

- **Descrição:**  
  Melhoria na função `renderTodos` para aprimorar a visualização de tarefas concluídas.

- **Detalhes:**  
  - **Atualização na Lógica:**  
    Agora, quando uma tarefa está concluída, a função remove a classe de borda original (`border-${todo.color || "secondary"}`) e a substitui por `border-success`. Essa alteração reforça visualmente o status concluído da tarefa.  
    *Antes, essa remoção não era realizada.*
  
  - **Código Relevante:**
    ```javascript
    if (todo.completed) {
      todoItem.classList.remove(`border-${todo.color || "secondary"}`);
      todoItem.classList.add("border-success");
    }
    ```
---

### **08/02 - Ajustes na Animação dos Fireflies**

- **Descrição:**  
  Foram realizados ajustes na classe `.firefly` para aprimorar a centralização dos elementos e corrigir problemas visuais na animação, como a persistência de um ponto preto.

- **Detalhes:**  
  - **Centralização:**  
    O valor do `margin` foi alterado de `-0.2vw 0 0 9.8vw` para `-0.2vw 0 0 -0.2vw`, corrigindo o posicionamento dos fireflies.
  - **Transform Origin:**  
    A propriedade `transform-origin` dos pseudo-elementos `::before` e `::after` foi modificada de `-10vw` para `50% 50%`, garantindo que as rotações ocorram em torno do centro do elemento.
  - **Ajuste de Opacidade:**  
    A opacidade do pseudo-elemento `::before` foi ajustada de `0.4` para `0` para eliminar a exibição indesejada de um ponto preto.
  - **Outras Propriedades:**  
    As demais propriedades, como animações e keyframes, permanecem inalteradas, mantendo o efeito de movimento aleatório.

- **Exemplo de Código Atualizado:**  
  ```scss
  .firefly {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 0.4vw;
    height: 0.4vw;
    margin: -0.2vw 0 0 -0.2vw; // Ajuste para centralizar corretamente
    animation: ease 200s alternate infinite;
    pointer-events: none;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform-origin: 50% 50%; // Ajuste para girar em torno do centro
    }

    &::before {
      background: black;
      opacity: 0; // Ajuste para 0 se o ponto preto persistir
      animation: drift ease alternate infinite;
    }

    &::after {
      background: white;
      opacity: 0;
      box-shadow: 0 0 0vw 0vw yellow;
      animation: drift ease alternate infinite, flash ease infinite;
    }
  }
  ```

---
  
### **09/02 - Atualização do components.css: Vendor Prefixes e Ajuste no Hover**

- **Descrição:**  
  Nesta atualização foram introduzidos os prefixos `-webkit-` para propriedades críticas como `box-shadow`, `transform`, `transition` e `backdrop-filter`, aumentando a compatibilidade com navegadores baseados em WebKit (como versões antigas do Chrome e o Safari). Além disso, o efeito de hover em `.todo-item` foi ajustado: a declaração de sombra duplicada foi eliminada, mantendo apenas a sombra inset desejada para destacar o item de forma mais consistente.

- **Impacto no Funcionamento:**  
  - **Compatibilidade Aprimorada:** As alterações garantem que os efeitos visuais e a renderização dos componentes permaneçam consistentes em diversos navegadores, especialmente aqueles que ainda dependem de prefixos.
  - **Estabilidade Visual:** Ao remover declarações redundantes de sombra no estado hover, o destaque dos itens fica mais uniforme, melhorando a experiência do usuário sem modificar a identidade visual do projeto.

---

