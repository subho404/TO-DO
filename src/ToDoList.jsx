import { useState } from "react";

function ToDoList(){
  const [task, setTasks] = useState(["add your daily work here"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedtasks=task.filter((element,i)=>i!==index);
    setTasks(updatedtasks);
  }

  function moveTaskUp(index) {
    if(index>0){
        const updatedtasks=[...task];
        [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
        setTasks(updatedtasks);
    }
  }

  function moveTaskDown(index) {
    if(index<task.length-1){
        const updatedtasks=[...task];
        [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
        setTasks(updatedtasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add task
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete Task
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;