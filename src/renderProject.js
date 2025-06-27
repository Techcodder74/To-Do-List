const renderProject=(ProjectList)=>{
    function renderProjectArea(projects){
    ProjectList.innerHTML="";
    projects.forEach(element => {
        const div=document.createElement("li");
        div.innerHTML=element.name;
        div.dataset.id=element.id;
        div.classList.add("pr")
        ProjectList.appendChild(div);
        
    });}
    return renderProjectArea;

}
export default renderProject;