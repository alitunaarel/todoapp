const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const fisrtCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearbutton = document.querySelector("clear-todos");

eventlisteners();

function eventlisteners() {
    form.addEventListener("submit", addTodo)

}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    addTodoUI(newTodo);

    e.preventDefault();
}


function addTodoUI(newTodo) {
    /*
<li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>
                        </li>
                        */

     // create item                   
    const listItem = document.createElement("li");
    // create Link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    //Create Text Node 
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // adding an item to TodoList
    todoList.appendChild(listItem);

    todoInput.value= "";

    

}