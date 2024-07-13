import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      setTaskList(JSON.parse(array));
    }
  }, []);

  console.log(taskList);

  return (
    <>
      <div>
        <h1 className="font-bold ">The Kanban Style Task Tracker</h1>
        <p>
          Click
          <AddTask taskList={taskList} setTaskList={setTaskList} /> To add Task
        </p>
        <p>Click to Add Task</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg bg-gray-200 border px-2 py-2 text-start">
          To Do:
        </h2>
        {taskList.map((task, i) => {
          return (
            <Todo
              key={i}
              index={i}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
