
let addTaskButton = document.getElementById("add-task");
let taskList = document.getElementById("actual-list");
let insertTask = document.getElementById("insert-task");

// Eu quero que o enter também provoque o clique do botão adicionar:
insertTask.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTaskButton.click();
  }
});

// O clique do botão adicionar:
addTaskButton.addEventListener('click', function() {
    // console.log("Botão foi clicado e chamou a função.")
    let newTask = document.getElementById("insert-task");
    // Verificar se existe algo escrito (aproveitando que Javascript é truthy):
    if (newTask.value) {
        // console.log("Verificação funciona.")
        // Criar novo elemento na lista:
        let newItem = document.createElement("li");
        newItem.classList.add("todo-item");
        newItem.innerHTML = 
        `<input type="checkbox" class="check-task"/>
        <span class="todo-item-text">`
        + newTask.value +
        `</span> <button class="delete-button" title="Apagar tarefa"><i class='bx bxs-x-square'></i></button>`;
      
        // Aplicar a funcionalidade de remover tarefa no botão do item da lista que acabamos de criar:
        let deleteButton = newItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
          // console.log("Botão de deletar está sendo clicado.")
          if (confirm("Tem certeza que deseja apagar esta tarefa?") == true) {
            newItem.remove();
          };
        });
        taskList.appendChild(newItem);
        newTask.value = "";        
    };
});

// Aplicar a funcionalidade do botão de remover uma tarefa para os itens que já existem na página inicialmente:
// Instanciar todos os botões de apagar que já existem na página inicialmente e acrescentar um event listener para cada botão:
let deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Encontrar o elemento mãe <li>:
    let todoItem = button.closest(".todo-item");
    if (todoItem) {
      if (confirm("Tem certeza que deseja apagar esta tarefa?") == true) {
        todoItem.remove();
      };
    };
  });
});