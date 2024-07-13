import React, { useEffect, useState, useSyncExternalStore } from "react";
import EditTask from "./EditTask";

const Todo = ({ task, index, taskList, setTaskList }) => {
  const [time, setTime] = useState(task.duration);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStop = () => {
    setRunning(false)
    let taskIndex = taskList.indexOf(task);
    taskList.splice()
  };

  const handleDelete = (itemId) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1, {
      taskName: task.taskName,
      taskDesc: task.taskDesc,
      timestamp: task.timestamp,
      duration: time 
    });

    localStorage.setItem("taskList", JSON.stringify(taskList))
    window.location.reload()
  };
  return (
    <>
      <div className="bg-white flex flex-col my-4 ml-6 w-3/4 max-w-lg items-start px-6 py-2 rounded">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg py-2">{task.taskName}</p>
          <EditTask
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />{" "}
        </div>
        <p>{task.taskDesc}</p>
        <div className="w-full">
          <div className="flex items-center justify-center gap-x-2 my-3">
            <span>{("0" + Math.floor((time / (60 * 60 )) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className="text-sm">
              {("0" + Math.floor((time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="flex items-center justify-center gap-x-5 my-4">
            {running ? (
              <button
                className="border py-1 px-4 bg-blue-500 rounded-md"
                onClick={handleStop}
              >
                Stop
              </button>
            ) : (
              <button
                className="border py-1 px-4 bg-lime-400 rounded-md"
                onClick={() => setRunning(true)}
              >
                Start
              </button>
            )}{" "}
            <button
              className="border py-1 px-4 bg-red-500 rounded-md"
              onClick={() => setTime(0)}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            className="bg-red-500 py-1.5 px-3 rounded text-white font-semibold uppercase text-sm "
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
