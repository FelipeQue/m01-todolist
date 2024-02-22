
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
        taskList.appendChild(newItem);
        // console.log(newItem)
        // Agora quero apagar o texto digitado no campo de texto:
        newTask.value = "";
    };
});