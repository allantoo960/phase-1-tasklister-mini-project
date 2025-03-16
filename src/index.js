document.addEventListener("DOMContentLoaded", () => {
})
const taskListArray=[];
const submitTask=document.getElementById('sumit task')
submitTask.addEventListener=document.getElementById("new task description")

taskListArray.push(newTaskDescription)
console.log(taskListArray)

const toDoList=document.getElementById("tasks")

taskListArray.forEach((task)=>{
  const li=document.createElement("li")
  li.innerText=task;
  toDoList.apprendChild(li);
  console.log(task)
});
newTaskDescription.value=taskListArray;

form.addEventListener("submit",funtion(s)) (
  s.preventDefault() 
)