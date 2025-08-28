"use client";
//   TO-DO LIST BOX
import { FilterButton, AddButton, Input, Task } from "@/components";
import { useState } from "react";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // all, active,completed
  const [filter, setFilter] = useState("all");

  // task nemegdsen ni
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tracks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  // Completed toggle
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Task устгах ni
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Filterlesen jagsaalt
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <>
      {/* background style*/}
      <div className=" pt-50 pl-100 bg-gray-200 w-full h-screen ">
        {/* To-Do list Box */}
        <div className="bg-white w-[400px] h-[300px] rounded-2xl rounded-black p-6 shadow-2xl shadow-gray-500 mb-[40]">
          <h3 className="text-black text-2xl ml-30 ">To-Do list</h3>
          {/* input and button */}
          <div className="flex gap-2 mt-5">
            <Input
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></Input>

            <AddButton onClick={addTask}>Add</AddButton>
          </div>
          {/* filter buttons */}
          <div className="flex gap-2 mt-5 ">
            <FilterButton
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterButton>

            <FilterButton
              active={filter === "active"}
              onClick={() => setFilter("active")}
            >
              Active
            </FilterButton>

            <FilterButton
              active={filter === "completed"}
              onClick={() => setFilter("completed")}
            >
              Completed
            </FilterButton>
          </div>
          {/* click buttons
          <div className="flex gap-2 mt-5 ">
            <button className=" bg-blue-500 text-white w-10 h-7 rounded">
              All
            </button>
            <button className=" bg-gray-300 text-gray-600 w-15 h-7 rounded">
              Active
            </button>
            <button className="bg-gray-300 text-gray-600 w-25 h-7 rounded">
              Completed
            </button>
          </div> */}

          {/* tasks */}
          {filteredTasks.map((task, i) => (
            <div
              key={i}
              className="w-full bg-[#F9FAFB] rounded-md flex justify-between items-center px-3 py-2 mb-2"
            >
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(i)}
                />
                <span className={task.completed ? "line-through" : ""}>
                  {task.text}
                </span>
              </label>
              {task.completed && (
                <button
                  onClick={() => deleteTask(i)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          {/* footer */}
          <div className="border-t mt-4 pt-2 flex justify-between text-sm text-gray-500">
            <span>
              {tasks.filter((t) => t.completed).length} of {tasks.length} tasks
              completed
            </span>
            <button
              onClick={() => setTasks(tasks.filter((t) => !t.completed))}
              className="text-red-500"
            >
              Clear completed
              {/* Footer
          <p className="text-gray-500 pt-10 pl-20">
            No tasks yet. Add one above!
          </p>
          <p className="text-gray-500 pl-16 pt-8">
            Powered by
            <span className="text-blue-400 "> Pinecone academy</span>
          </p>
        </div> */}
              {/* First CheckBox
        <div>
          <div className="w-80 h-16 bg-[#F9FAFB] rounded-md flex mb-[20] items-center ">
            <Task></Task>
            <div className="text-black pl-[10]">Create PR 2</div>
          </div>
        </div>

        Second CheckBox
        <div>
          <div className="w-80 h-16 bg-[#F9FAFB] rounded-md flex mb-[20] items-center ">
            <Task></Task>
            <div className="text-black pl-[10] line-through">Create PR </div>
            <button className="w-[68] h-[30] bg-[#FEF2F2] rounded-md ml-[120]">
              <span className="text-[#EF4444]">Delete</span>
            </button>
          </div>
        </div>

        border-b
        <div className="border-b-1 border-[#acafb4] w-[320]"></div>
        <div className="text-[#acafb4] pt-[16] inter">
          1 of 2 tasks completed
          <span className="text-[#EF4444] pl-[40]">Clear completed </span>
        </div> */}
            </button>
            {/* <p className="text-gray-500 pl-16 pt-8">
              Powered by
              <span className="text-blue-400 "> Pinecone academy</span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
