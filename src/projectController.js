// import project from "./models/project.js"
// import task from "./models/task.js"


// Projects=[];


// const getAllProjects=()=>Projects;
// const addProject=function(name)
// {
//     Projects.push(new project(name))
// }

// const addTask=function(pName, tName, due,  priority)
// {  const p=Projects.find((p)=>p.name===pName)
//     if(!p)return;
//     const tt=new task(tName, due, priority);
//     p.addTask(tt);}


// const completeTask=function(pName,tName)
// {  const p=Projects.find((p)=>p.name===pName)
//     if(!p)return;
//     const t=p.get().find((tt)=>tt.name===tName)
//     if(!t)return;
//     t.isComplete=true;   
// }

// export {getAllProjects, addProject, addTask, completeTask}

import Project from "./models/project.js";
import Task from "./models/task.js";
import insertRandom from "./randomText.js";
// Global Projects array (populated via loadProjectsFromStorage)
let Projects = [];

// Save all projects to localStorage
// Get all projects
const getAllProjects = () => Projects;

// Add a new project
const addProject = function(name) {
    const newProject = new Project(name);
    Projects.push(newProject);
    saveProjectsToStorage();
    return newProject;
};

// Add a task to a specific project
const addTask = function(pName, tName, due) {
    const p = Projects.find(p => p.name === pName);
    if (!p) return;

    const newTask = new Task(tName, new Date(due));
    p.add(newTask);
    saveProjectsToStorage();
};

// Mark a task as complete by name
const completeTask = function(pName, tName) {
    const p = Projects.find(p => p.name === pName);
    if (!p) return;

    const t = p.get().find(task => task.name === tName);
    if (!t) return;

    t.isComplete = true;
    saveProjectsToStorage();
};

function saveProjectsToStorage() {
    const plainProjects = Projects.map(p => ({
        id: p.id,
        name: p.name,
        arr: p.arr.map(t => ({
            id: t.id,
            name: t.name,
            due: t.due instanceof Date ? t.due.toISOString() : t.due,
            isComplete: t.isComplete
        }))
    }));

    localStorage.setItem("projects", JSON.stringify(plainProjects));
}


function loadProjectsFromStorage() {
    const saved = localStorage.getItem("projects");
    if (!saved){ insertRandom(addTask,addProject);
        saveProjectsToStorage();
        return;}

    const rawProjects = JSON.parse(saved);
    Projects = rawProjects.map(p => {
        const proj = new Project(p.name);
        proj.id = p.id;

        proj.arr = p.arr.map(t => {
            const tsk = new Task(t.name, new Date(t.due));
            tsk.id = t.id;
            tsk.isComplete = t.isComplete;
            return tsk;
        });

        return proj;
    });
}




export {
    getAllProjects,
    addProject,
    addTask,
    completeTask,
    saveProjectsToStorage,
    loadProjectsFromStorage
};

