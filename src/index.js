import "./style.css";
import {getAllProjects, addProject, addTask, completeTask,saveProjectsToStorage, loadProjectsFromStorage} from "./projectController.js"
import renderProject from "./renderProject.js";
import renderTask from "./renderTasks.js";




const projectList = document.querySelector("#projects");
const todoHeader= document.querySelector("#todo-header");
const todolist=document.querySelector("#list");

//project dialog elements;
const projectInput=document.querySelector("#addProject");
const projectDialog=document.querySelector("#projectdialog");
const projectForm=document.querySelector("#projectForm");
const projectCancel=document.querySelector("#closeProjectDialog");

//task dialog elements
const taskInput=document.querySelector("#addTaskButton");
const taskDialog=document.querySelector("#taskDialog");
const taskForm=document.querySelector("#formId");
const taskNameBox=document.getElementById("taskNameBox");
const taskCancel=document.querySelector("#cancelTaskButton");



loadProjectsFromStorage()
let currentProject = getAllProjects()[0];
const rpA=renderProject(projectList);
const rtA=renderTask(todoHeader,todolist);
rpA(getAllProjects());
rtA(currentProject)

todolist.addEventListener("change", function(e){
    if(e.target.classList.contains("todo-checkbox"))
    {
                 const checkbox=e.target;
                 const id=checkbox.dataset.id;
                 const task=currentProject.get().find(t=>t.id===id);
                 if(task)
                 {
                    task.isComplete = checkbox.checked;

        const li = checkbox.closest("li");
        li.classList.toggle("completed", task.isComplete);
                 }
                  saveProjectsToStorage();
    }
})
projectList.addEventListener("click",function(e){
    if(e.target.classList.contains("pr"))
    {
        currentProject=getAllProjects().find((p)=>p.id===e.target.dataset.id);
        rtA(currentProject);
    }
})


//project Dialog
projectInput.addEventListener("click",(e)=>
{
    projectDialog.showModal();
})
projectForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("projectBox").value.trim();
    const element=addProject(name);
    const div=document.createElement("li");
            div.innerHTML=element.name;
            div.dataset.id=element.id;
            div.classList.add("pr")
            projectList.appendChild(div);
    document.getElementById("projectBox").value="";
    projectDialog.close()
     saveProjectsToStorage();
})
projectCancel.addEventListener("click",(e)=>
{
     projectDialog.close();
      document.getElementById("projectBox").value="";
})

// task dialog
taskInput.addEventListener("click",(e)=>{
    taskDialog.showModal();
})
taskCancel.addEventListener("click",(e)=>{
    taskNameBox.value="";
    taskDialog.close();

})
taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const tName=taskNameBox.value.trim();
    const due=document.getElementById("dueDateBox").value;
    addTask(currentProject.name, tName, due);
    rtA(currentProject);
      saveProjectsToStorage();
    taskNameBox.value="";
    taskDialog.close();
})
