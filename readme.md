# Atualizações do ToDo List

Este documento lista as atualizações mais recentes realizadas no projeto **ToDo List BlackShadow**. Cada atualização aprimora a funcionalidade ou adiciona novas features para melhorar a experiência do usuário.

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

----

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

