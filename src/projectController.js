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

// Use const for reference, but it's still mutable
const Projects = [];

// Get all projects
const getAllProjects = () => Projects;

// Add a new project
const addProject = function(name) {
    Projects.push(new Project(name));
};

// Add a task to a specific project
const addTask = function(pName, tName, due) {
    const p = Projects.find((p) => p.name === pName);
    if (!p) return;
    
    const newTask = new Task(tName, due);
    p.add(newTask);
};

// Mark a task as complete by name
const completeTask = function(pName, tName) {
    const p = Projects.find((p) => p.name === pName);
    if (!p) return;

    const t = p.get().find((task) => task.name === tName);  // p.get() should return tasks
    if (!t) return;

    t.isComplete = true;
};

// Export all functions
export { getAllProjects, addProject, addTask, completeTask };
