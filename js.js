const addTaskButton = document.querySelector('#addTaskButton') 

const addTaskButton1 = document.querySelector('#addTaskButton1') 
let taskInput = document.querySelector('#taskInput') 
const taskSection = document.querySelector('.taskSection') 
const tasks = document.querySelector('.tasks') 
const ulTasks = document.querySelector('.ulTasks')
const tasksTextField = document.querySelector('.tasksTextField') 
const tasksLength = tasks.getElementsByTagName("*").length
const garbageButton = document.querySelector('.garbageButton') 
let inputData = {}
let inn = document.getElementById('inn')
const LS = localStorage
let counter = 1

let todoList = []



document.getElementById('add').onclick = function() {                       
    let temp = {}
    temp.todo = document.getElementById('inn').value
    temp.check = false
    let i = todoList.length
    todoList[i] = temp
    out()
    document.getElementById('inn').value = ''
    localStorage.setItem('todo', JSON.stringify(todoList))
}

function out() {
    let out = ''

    for (let key in todoList) {
        out +=  `<div class="tasksItems"><input type="text" class="tasksTextField" value="${todoList[key].todo}"><button class="garbageButton" id="garbageButton0"><i class="fa-regular fa-trash-can"></i></button></div>`
        // if (todoList[key].check == true) {
        //     out += `<div class="tasksItems"><input type="text" class="tasksTextField" id="${taskInput+=1}><button class="garbageButton" id="garbageButton0"><i class="fa-regular fa-trash-can"></i></button></div>`
        // }
    }
    document.getElementById('out').innerHTML = out
}

// value="${myObj.todo}"  

