

const renderTask=function(todoheader, taskarea)
{
    function render(project)
    {
        todoheader.innerHTML="";
        taskarea.innerHTML="";
        todoheader.innerHTML=project.name;

        let arr=project.get();
        arr.forEach(el => {
              const div=document.createElement("li");
              const tname=document.createElement("div");
              const checkbox = document.createElement("input");
               checkbox.type = "checkbox";
               checkbox.dataset.id=el.id;
               checkbox.classList.add("todo-checkbox")
               checkbox.id=`${el.id}`;
               const tnam=document.createElement("label");
                tnam.htmlFor=`${el.id}`
               tnam.textContent=el.name;
               const due = document.createElement("div");
              due.textContent = `Due: ${el.due.toDateString()}`;
              if(el.isComplete)
              {
                div.classList.add("completed");
                checkbox.checked = true;
              }
              tname.appendChild(checkbox);
              tname.appendChild(tnam);
              tname.classList.add("todolist");
              div.appendChild(tname);
              div.appendChild(due);
              taskarea.appendChild(div);

        });

    }
    return render;
}
export default renderTask;