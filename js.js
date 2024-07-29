const addTaskButton = document.querySelector('#addTaskButton') 

const addTaskButton1 = document.querySelector('#addTaskButton1') 
const taskInput = document.querySelector('#taskInput') 
const taskSection = document.querySelector('.taskSection') 
const tasks = document.querySelector('.tasks') 
const ulTasks = document.querySelector('.ulTasks')
const tasksTextField = document.querySelector('.tasksTextField') 
const tasksLength = tasks.getElementsByTagName("*").length
const garbageButton = document.querySelector('.garbageButton') 
let inputData = {}
const LS = localStorage
let counter = 1

let todoList = []



document.getElementById('add').onclick = function() {
    let temp = {}
    temp.todo = document.getElementById('in').value
    temp.check = false
    let i = todoList.length
    todoList[i] = temp
    out()
}

function out() {
    let out = ''
    for (let key in todoList) {
  
        out += `<input type="text" id="33" value="${counter}">`
        console.log( out );
    }
    document.getElementById('out').innerHTML = out
}

//todoList[key].todo  //+ '<div class="tasks"><input type="text" value="1" placeholder="" class="tasksTextField" id=""><button class="garbageButton" id="garbageButton0"><i class="fa-regular fa-trash-can"></i></button></div>'


