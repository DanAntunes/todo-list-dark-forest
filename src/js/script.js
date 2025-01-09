document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const editForm = document.getElementById("edit-form");
  const editInput = document.getElementById("edit-input");
  const filterSelect = document.getElementById("filter-select");
  const editModal = new bootstrap.Modal(document.getElementById("editModal"));

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let currentEditId = null;

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const renderTodos = () => {
    const filter = filterSelect.value;
    todoList.innerHTML = "";

    todos
      .filter((todo) => {
        if (filter === "done") return todo.completed;
        if (filter === "todo") return !todo.completed;
        return true;
      })
      .forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.className = `todo-item border border-${todo.color || "secondary"} rounded p-3 mb-3`;
        todoItem.dataset.id = todo.id;

        todoItem.innerHTML = `
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" class="form-check-input me-2 toggle-complete" ${todo.completed ? "checked" : ""}>
              <h5 class="d-inline">${todo.title}</h5>
            </div>
            <div>
              <button class="btn btn-sm btn-info me-2 toggle-description">+</button>
              <button class="btn btn-sm btn-primary edit-task">Editar</button>
              <button class="btn btn-sm btn-danger delete-task">Excluir</button>
            </div>
          </div>
          <p class="description mt-2" style="display: none;">${todo.description}</p>
        `;

        todoList.appendChild(todoItem);
      });
  };

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = todoInput.value.trim();
    const description = prompt("Digite a descrição da tarefa:", "");
    const color = prompt("Escolha uma cor para a borda (primary, secondary, success, danger, warning, info):", "secondary");

    if (!title) {
      alert("Por favor, insira um título para a tarefa.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description: description || "Sem descrição.",
      color: color || "secondary",
      completed: false,
    };

    todos.push(newTodo);
    saveToLocalStorage();
    renderTodos();
    todoInput.value = "";
  });

  todoList.addEventListener("click", (e) => {
    const todoItem = e.target.closest(".todo-item");
    const todoId = Number(todoItem?.dataset.id);

    if (e.target.classList.contains("toggle-description")) {
      const description = todoItem.querySelector(".description");
      description.style.display = description.style.display === "none" ? "block" : "none";
    }

    if (e.target.classList.contains("edit-task")) {
      const todo = todos.find((t) => t.id === todoId);
      currentEditId = todoId;
      editInput.value = todo.title;
      editModal.show();
    }

    if (e.target.classList.contains("delete-task")) {
      todos = todos.filter((t) => t.id !== todoId);
      saveToLocalStorage();
      renderTodos();
    }
  });

  todoList.addEventListener("change", (e) => {
    if (e.target.classList.contains("toggle-complete")) {
      const todoItem = e.target.closest(".todo-item");
      const todoId = Number(todoItem?.dataset.id);
      const todo = todos.find((t) => t.id === todoId);

      if (todo) {
        todo.completed = e.target.checked;
        saveToLocalStorage();
        renderTodos();
      }
    }
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTitle = editInput.value.trim();
    const newDescription = prompt("Digite a nova descrição (ou deixe em branco para manter a antiga):");
    const newColor = prompt("Escolha uma nova cor para a borda (primary, secondary, success, danger, warning, info):", "secondary");

    if (!newTitle) {
      alert("O título não pode estar vazio.");
      return;
    }

    const todo = todos.find((t) => t.id === currentEditId);
    if (todo) {
      todo.title = newTitle;
      todo.description = newDescription || todo.description;
      todo.color = newColor || todo.color;
      saveToLocalStorage();
      renderTodos();
      editModal.hide();
    }
  });

  filterSelect.addEventListener("change", renderTodos);

  renderTodos();
});
