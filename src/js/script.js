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
  
    const filteredTodos = todos.filter((todo) => {
      const matchesFilter =
        filter === "done" ? todo.completed : filter === "todo" ? !todo.completed : true;
      const matchesSearch = todo.title.toLowerCase().includes(searchQuery);
      return matchesFilter && matchesSearch;
    });

    for (const todo of filteredTodos) {
      const todoItem = document.createElement("div");
      todoItem.className = `todo-item border border-${todo.color || "secondary"} rounded p-3 mb-3`;
      
      if (todo.completed) {
        todoItem.classList.add("border-success");
      }

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
            <button class="btn btn-sm btn-info me-2 toggle-description">
              <i class="bi bi-plus-circle-fill"></i>
            </button>
            <button class="btn btn-sm btn-primary edit-task">Editar</button>
            <button class="btn btn-sm btn-danger delete-task">Excluir</button>
          </div>
        </div>
        <p class="description mt-4" style="display: none;">${todo.description}</p>
      `;

      todoList.appendChild(todoItem);
    }
  };
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
  const showModalError = (message) => {
    const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
    document.getElementById("error-message").textContent = message;
    errorModal.show();
  };
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
            <div class="row mb-3">
              <!-- Cor da Borda -->
              <div class="col-md-6">
                <label for="task-border" class="form-label">Cor da Borda</label>
                <select class="form-control" id="task-border">
                  <option value="primary">Azul</option>
                  <option value="secondary">Cinza</option>
                  <option value="success">Verde</option>
                  <option value="danger">Vermelho</option>
                  <option value="warning">Amarelo</option>
                </select>
              </div>
              <!-- Data -->
              <div class="col-md-6">
                <label for="task-date" class="form-label">Data</label>
                <input type="date" class="form-control" id="task-date" required />
              </div>
            </div>
            <!-- Descrição -->
            <div class="mb-3">
              <label for="task-desc" class="form-label">Descrição</label>
              <textarea class="form-control" id="task-desc" placeholder="Descrição da tarefa" rows="3" required></textarea>
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

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const addTaskModal = new bootstrap.Modal(document.getElementById("addTaskModal"));
    addTaskModal.show();

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

      todoInput.value = "";

      addTaskModal.hide();
      alertify.success("Tarefa criada com sucesso!");
    });

    addTaskModal._element.addEventListener('hidden.bs.modal', () => {
      document.getElementById("addTaskModal").remove();
    });
  };

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    openAddTaskModal(); 
  });

  todoList.addEventListener("click", (e) => {
    const todoItem = e.target.closest(".todo-item");
    const todoId = Number(todoItem?.dataset.id);
  
    if (e.target.closest(".toggle-description")) {
      const toggleDescriptionButton = todoItem.querySelector(".toggle-description");
      const descriptionElement = todoItem.querySelector(".description");
      const icon = toggleDescriptionButton.querySelector("i");
  
      if (icon.classList.contains("bi-plus-circle-fill")) {
        icon.classList.remove("bi-plus-circle-fill");
        icon.classList.add("bi-dash-circle-fill");
        descriptionElement.style.display = "block";
      } else {
        icon.classList.remove("bi-dash-circle-fill");
        icon.classList.add("bi-plus-circle-fill");
        descriptionElement.style.display = "none";
      }
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
      alertify.confirm(
        "Confirmação de Exclusão",
        "Tem certeza de que deseja excluir esta tarefa?",
        () => {
          todos = todos.filter((t) => t.id !== todoId);
          saveToLocalStorage();
          renderTodos();
          alertify.success("Tarefa excluída com sucesso!");
        },
        () => {
          alertify.error("A exclusão foi cancelada.");
        }
      );
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
