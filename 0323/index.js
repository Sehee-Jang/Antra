// CONST
const domSelectors = {
    'todoListHeader': '.todoList_header',
    'todoListContent': '.todoList_content'
}


// Data
const title = "My To Do List";
const submitText = "Add";
let todos= [{
    "userId": 1,
    "id": 1,
    "title": "Hit the Gym",
    "completed": false
}, {
    "userId": 1,
    "id": 2,
    "title": "ABCDE",
    "completed": false
}, {
    "userId": 1,
    "id": 3,
    "title": "FTWEFQEFQ",
    "completed": true
}, {
    "userId": 1,
    "id": 4,
    "title": "QERQWERQ",
    "completed": false
}]

function deletTodo(id){
    todos = todos.filter(todo => todo.id !== id);
}

function generateHeaderContent(title, submitText) {
    return `
    <h1 class="todoList_header_title">${title}</h1>
    <div class="input-bar">
        <input class="input-bar_input" />
        <button class="input-bar_submit">${submitText}</button>
    </div>`
}

function generateTodoItem(todo) {
    return `
    <li id="todo-${todo.id}" class="todoList_content_row">
        <span class="todoList_content_item">${todo.title}</span>
        <button class="todoList_content_action">X</button>
    </li>
    `
}


function generateTodoList(todos) {
    return todos.map(todo => generateTodoItem(todo)).join('')
}

// generateTodoList(todos)

function renderHeader(title, submitText) {
    const ele = document.querySelector(domSelectors.todoListHeader)
    const tmp = generateHeaderContent(title, submitText)
    render(ele, tmp)
}

function renderTodoList(todos) {
    const tmp = generateTodoList(todos);
    const ele = document.querySelector(domSelectors.todoListContent);
    render(ele.tmp)
}

function render(element, template) {
    element.innerHTML = template;
}

function setUpEvent(){
    document.querySelector(domSelectors.todoListContent).addEventListener('click', (e) => {
        if(isDeleteButton(e.target)) {
            const id = getTodoIdFromBtn(e.target);
            deletTodo(id);
            renderTodoList(todos);
        } 
    })
}

function getTodoIdFromBtn(btnElement) {
    return + (btnElement.parentElement.id.substring(5)) // convert string to number
}
function isDeleteButton(element) {
    return element.classList.contains('todoList_content_action')
}
// generateHeaderContent(title,submitText)

// init
renderHeader(title, submitText);
renderTodoList(todos);

// init Event
setUpEvent();
