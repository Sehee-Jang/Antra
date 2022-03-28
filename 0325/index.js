// CONST
const domSelectors = {
    'todoListHeader': '.todoList_header',
    'todoListContent': '.todoList_content',
    'inputBarSubmit': '.input-bar_submit',
    'inputBarInput': '.input-bar_input'
}

// Data
const title = "My To Do List";
const submitText = "Add";
// let todos= [{
//     "userId": 1,
//     "id": 1,
//     "title": "Hit the Gym",
//     "completed": true
// }, {
//     "userId": 1,
//     "id": 2,
//     "title": "Pay bills",
//     "completed": true
// }, {
//     "userId": 1,
//     "id": 3,
//     "title": "Meet George",
//     "completed": false
// }, {
//     "userId": 1,
//     "id": 4,
//     "title": "Buy eggs",
//     "completed": false
// }]

function addNewTodo(newTodo){
    todos = [... todos, {
        ...newTodo,
        id: Math.floor(Math.random() * 1000000)
    }]
}

function deletTodo(id){
    todos = todos.filter(todo => todo.id !== id);
}

function toggleCompleteTodo(id) {
    todos = todos.map(todo => {
        if(todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo;
    });
}

function generateHeaderContent(title, submitText) {
    return `
        <h1 class="todoList_header_title">${title}</h1>
        <div class="input-bar">
            <input class="input-bar_input" />
            <button class="input-bar_submit">${submitText}</button>
        </div>
    `
}

function generateTodoItem(todo) {
    return `
        <li id="todo-${todo.id}" class="todoList_content_row ${todo.completed? 'checked' : ''}">
            <span class="todoList_content_item">${todo.title}</span>
            <button class="todoList_content_action">X</button>
        </li>
    `
}

function generateTodoList(todos) {
    return todos.map(todo => generateTodoItem(todo)).join('')
}

function renderHeader(title, submitText) {
    const ele = document.querySelector(domSelectors.todoListHeader);
    const tmp = generateHeaderContent(title, submitText)
    render(ele, tmp)
}

function renderTodoList(todos) {
    const tmp = generateTodoList(todos);
    const ele = document.querySelector(domSelectors.todoListContent);
    render(ele, tmp)
}

function render(element, template) {
    element.innerHTML = template;
}

function setUpEvent(){
    document.querySelector(domSelectors.inputBarSubmit).addEventListener('click', (e) => {
        const inputEle = document.querySelector(domSelectors.inputBarInput);
        const newTitle = inputEle.value;
        inputEle.value =''
        const newTodo = {
            title: newTitle,
            completed: false,
            userId: 1
        }
        addTodo(newTodo).then(data => {
            addNewTodo(data);
            renderTodoList(todos); // todo입력 시 리스트에 출력
        })
    })

    document.querySelector(domSelectors.todoListContent).addEventListener('click', (e) => {
        if(isDeleteButton(e.target)) {
            const id = getTodoIdFromParent(e.target);
            deleteTodo(id).then(_ => {
                deletTodo(id);
                renderTodoList(todos); 
            })

        } else if(isContenRoworItem(e.target)) {
            let id = getTodoIdFromElement(e.target) ? getTodoIdFromElement(e.target) : getTodoIdFromParent(e.target)
            toggleCompleteTodo(id)
            renderTodoList(todos);

        }
    })
}

function getTodoIdFromElement(element) {
    if(element?.id?.startsWith('todo')) {
        return +(element.id.substring(5))    
    }
    console.warn('Element does not has an id') 
    return null;
}

function getTodoIdFromParent(childElement) {
    return getTodoIdFromElement(childElement.parentElement);
    // return +(childElement.parentElement.id.substring(5)) // convert string to number
}

function isDeleteButton(element) {
    return element.classList.contains('todoList_content_action')
}
// generateHeaderContent(title,submitText)

function isContenRoworItem(element) {
    return element.classList.contains('todoList_content_row')
        || element.classList.contains('todoList_content_item')
}
  

//APIs
function getTodos(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
}

function deleteTodo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',   
    });
}

function addTodo(newTodo) {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo), // converting json obejct to json //create new todo
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
}

// init
renderHeader(title, submitText);
getTodos().then(todosData => {
    todos = todosData;
    renderTodoList(todos);    
})

// init Event
setUpEvent();
