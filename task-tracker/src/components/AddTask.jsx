import React from "react";
import { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const [addModel, setAddModel] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTask = (e) => {
    const { name, value } = e.target;
    if (name == "taskName") {
      setTaskName(value);
      setErrorMessage("");
    }
    if (name == "taskName" && value == "") {
      setErrorMessage("Please Enter the Task Name to continue");
    } else {
      if (name == "taskDesc") setTaskDesc(value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!taskName) {
      setErrorMessage("Enter Task Name to continue");
    } else {
      let timeStamp = new Date();
      // local storage
      let tempList = taskList;
      tempList.push({
        taskName,
        taskDesc,
        timeStamp: timeStamp,
        duration: 0,
      });
      localStorage.setItem("taskList", JSON.stringify(tempList))
      window.location.reload()
      // setTaskList([...taskList, { taskName, taskDesc }, timeStamp]);
      setAddModel(() => !addModel);
      setTaskName("");
      setTaskDesc("");
    }
  };
  return (
    <div>
      <button
        className="bg-blue-400 text-white px-3 py-2"
        type="button"
        onClick={() => setAddModel(!addModel)}
      >
        +ADD TASK
      </button>
      {addModel ? (
        <>
          <div className="overflow-x-hidden  overflow-y-auto fixed inset-0 z-50  flex items-center justify-center">
            <div className="w-[75%]  flex justify-between flex-row border  rounded-lg drop-shadow-sm shadow-slate-50 bg-white max-w-[27rem]">
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between py-4 p-5">
                  <h3 className="text-3xl font-semibold">Add New Task</h3>
                  <button
                    className="uppercase items-center px-1 text-gray-400   float-right leading-none text-2xl font-semibold block"
                    onClick={() => setAddModel(!addModel)}
                  >
                    x
                  </button>
                </div>
                <div className="border-t py-6">
                  <form className="flex flex-col gap-y-5 px-5 py-3">
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="project-name"
                        className="uppercase text-sm mb-2 block font-semiboltd tracking-wide"
                      >
                        Project Name
                      </label>
                      <input
                        name="taskName"
                        value={taskName}
                        onChange={handleTask}
                        type="text"
                        id="project-name"
                        placeholder="Project Name"
                        className="bg-gray-300 py-3 px-2 rounded-lg w-full border border-gray-200 leading-tight focus:outline-none focus:bg-white"
                        required
                      />
                      <p className="px-2 py-1 text-gray-600 text-center">
                        {errorMessage}
                      </p>
                    </div>
                    <div className="flex flex-col items-start  ">
                      <label
                        htmlFor="task-desc"
                        className="uppercase text-sm mb-2 block font-semiboltd tracking-wide"
                      >
                        Task Description
                      </label>
                      <textarea
                        name="taskDesc"
                        value={taskDesc}
                        onChange={handleTask}
                        type="text"
                        id="task-desc"
                        placeholder="Project Name"
                        className="bg-gray-300 py-3 px-2 rounded-lg w-full border border-gray-200 leading-tight focus:outline-none focus:bg-white"
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-5 border-t ">
                  <button
                    className="bg-purple-700 text-white px-6 py-3 uppercase rounded w-[35%] font-semibold text-sm  hover:opacity-70 "
                    onClick={handleAdd}
                  >
                    ADD TAsk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddTask;
