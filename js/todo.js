const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const addBtn = todoForm.querySelector('.todo-add button');
const todoList = document.querySelector('.todo-list');

let allwrittenToDo = [];

function showInput(){
    todoForm.classList.remove('hidden');
}

function doneToDo(event){
    const li = event.target.parentElement;
    li.remove();

    allwrittenToDo =allwrittenToDo.filter(allwrittenToDo => allwrittenToDo.id !== parseInt(li.id));

    saveToDo();
}

function saveToDo(){
    localStorage.setItem("To Do", JSON.stringify(allwrittenToDo));
}

function printToDo(writtenToDoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const doneBtn = document.createElement('button');
    li.id = writtenToDoObj.id;
    span.innerText = writtenToDoObj.text;
    doneBtn.addEventListener('click', doneToDo);
    li.addEventListener('click', doneToDo);

    li.appendChild(doneBtn);
    li.appendChild(span);
    todoList.appendChild(li);
}


function rememberToDo(event){
    event.preventDefault();
    todoForm.classList.add('hidden');

    const writtenToDo = todoInput.value;
    todoInput.value = '';
    
    const writtenToDoObj = {text: writtenToDo, id:Date.now()};
    allwrittenToDo.push(writtenToDoObj);
    // push로 array안에 넣어줘야함

    printToDo(writtenToDoObj);
    saveToDo();
}

todoForm.addEventListener('submit', rememberToDo);

const savedToDo = localStorage.getItem("To Do");

if(savedToDo !== null){
    const parsedToDo = JSON.parse(savedToDo);

    allwrittenToDo = parsedToDo;
    parsedToDo.forEach(printToDo);
}