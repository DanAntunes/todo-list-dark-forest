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