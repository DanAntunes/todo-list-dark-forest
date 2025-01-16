document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const editModal = new bootstrap.Modal(document.getElementById("editModal"));
  const filterSelect = document.getElementById("filter-select");
  const searchInput = document.getElementById("search-input");
  const eraseButton = document.getElementById("erase-button");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let currentEditId = null;

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const renderTodos = () => {
    const filter = filterSelect.value;
    const searchQuery = searchInput.value.toLowerCase();
    todoList.innerHTML = "";

    // biome-ignore lint/complexity/noForEach: <explanation>
    todos
      .filter((todo) => {
        const matchesFilter =
          filter === "done" ? todo.completed : filter === "todo" ? !todo.completed : true;
        const matchesSearch = todo.title.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
      })
      .forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.className = `todo-item border border-${todo.color || "secondary"} rounded p-3 mb-3`;
        todoItem.dataset.id = todo.id;

        todoItem.innerHTML = `
          <div class="d-flex justify-content-between align-items-center todo">
            <div>
              <input type="checkbox" class="form-check-input me-2 toggle-complete" ${
                todo.completed ? "checked" : ""
              }>
              <h5 class="d-inline">${todo.title}</h5>
            </div>
            <div>
              <button class="btn btn-sm btn-info me-2 toggle-description">+</button>
              <button class="btn btn-sm btn-primary edit-task">Editar</button>
              <button class="btn btn-sm btn-danger delete-task">Excluir</button>
            </div>
          </div>
          <p class="description mt-4" style="display: none;">${todo.description}</p>
        `;

        todoList.appendChild(todoItem);
      });
  };

  const showModalError = (message) => {
    const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
    document.getElementById("error-message").textContent = message;
    errorModal.show();
  };

  // Modal para adicionar descrição e cor ao criar tarefa
  const openAddTaskModal = () => {
    const modalHTML = `
      <div class="modal fade" id="addTaskModal" tabindex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addTaskModalLabel">Criar Nova Tarefa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="task-desc" class="form-label">Descrição</label>
                <input type="text" class="form-control" id="task-desc" placeholder="Descrição da tarefa" required>
              </div>
              <div class="mb-3">
                <label for="task-border" class="form-label">Cor da Borda</label>
                <select class="form-control" id="task-border">
                  <option value="primary">Azul</option>
                  <option value="secondary">Cinza</option>
                  <option value="success">Verde</option>
                  <option value="danger">Vermelho</option>
                  <option value="warning">Amarelo</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" id="save-task-btn">Salvar Tarefa</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Adiciona o modal ao DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Inicia o modal com Bootstrap
    const addTaskModal = new bootstrap.Modal(document.getElementById("addTaskModal"));
    addTaskModal.show();

    // Salva a tarefa ao clicar no botão de salvar
    document.getElementById("save-task-btn").addEventListener("click", () => {
      const description = document.getElementById("task-desc").value.trim();
      const color = document.getElementById("task-border").value;

      const title = todoInput.value.trim();
      if (!title) {
        showModalError("Para criar uma tarefa, é necessário fornecer um título válido.");
        addTaskModal.hide();
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
      addTaskModal.hide();
      alertify.success("Tarefa criada com sucesso!");
    });

    // Limpa o modal do DOM após o fechamento
    addTaskModal._element.addEventListener('hidden.bs.modal', () => {
      document.getElementById("addTaskModal").remove();
    });
  };

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    openAddTaskModal(); // Abre o modal ao clicar em adicionar
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

      document.getElementById("edit-task-title").value = todo.title;
      document.getElementById("edit-task-desc").value = todo.description;
      document.getElementById("edit-task-color").value = todo.color;

      editModal.show();
    }

    if (e.target.classList.contains("delete-task")) {
      todos = todos.filter((t) => t.id !== todoId);
      saveToLocalStorage();
      renderTodos();
      alertify.success("Tarefa excluída com sucesso!");
    }
  });

  document.getElementById("save-edit-btn").addEventListener("click", () => {
    const title = document.getElementById("edit-task-title").value.trim();
    const description = document.getElementById("edit-task-desc").value.trim();
    const color = document.getElementById("edit-task-color").value;

    if (!title) {
      showModalError("O título da tarefa não pode estar vazio ao editar.");
      return;
    }

    const todo = todos.find((t) => t.id === currentEditId);
    if (todo) {
      todo.title = title;
      todo.description = description || "Sem descrição.";
      todo.color = color || "secondary";
      saveToLocalStorage();
      renderTodos();
      editModal.hide();
      alertify.success("Tarefa editada com sucesso!");
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

  searchInput.addEventListener("input", renderTodos);

  eraseButton.addEventListener("click", () => {
    searchInput.value = "";
    renderTodos();
  });

  filterSelect.addEventListener("change", renderTodos);

  renderTodos();
});
