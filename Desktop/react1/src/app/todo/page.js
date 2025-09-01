"use client";
//   TO-DO LIST BOX
import { FilterButton, AddButton, Input } from "@/components";
import { useState } from "react";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // all, active,completed
  const [filter, setFilter] = useState("all");

  // Task nemegdsen ni
  const addTask = () => {
    if (newTask === "") {
      alert("Textee oruulna uu!!");
      return;
    }
    if (!newTask.trim()) return;
    setTasks([{ text: newTask, completed: false }, ...tasks]);
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
      {/* Background style*/}
      <div className=" pt-50 pl-100 bg-gray-200 w-full h-screen inter ">
        {/* To-Do list Box */}
        <div className="bg-white w-[400px] h-fit rounded-2xl rounded-black p-6 shadow-2xl shadow-gray-500 mb-[40]">
          <h3 className="text-black text-2xl ml-30 font-semibold">
            To-Do list
          </h3>
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

          {/* tasks */}
          {filteredTasks.map((task, i) => (
            <div
              key={i}
              className="w-[345] h-[62] bg-[#F9FAFB] rounded-md flex justify-between items-center px-3 py-2 mb-2 mt-[20] text-black hover:bg-gray-200  hover:duration-[0.3s]"
            >
              <label className="flex items-center gap-2">
                <input
                  className="w-[20px] h-[20px] accent-[#3C82F6] border-[#767676] "
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(i)}
                />
                <span className={task.completed ? "line-through" : ""}>
                  {task.text}
                </span>
              </label>
              {task.completed && (
                // Delete button
                <button
                  onClick={() => deleteTask(i)}
                  className="text-[#EF4444] w-[67] h-[30] bg-[#FEF2F2] rounded-[6] text-sm"
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
              className="text-[#EF4444]"
            >
              Clear completed
            </button>
          </div>

          {/* <div className="text-[#6B7280]">No tasks yet. Add one above!</div> */}

          <div className="text-[#6B7280] mt-[40] ml-[80]">
            Powered by
            <span className="text-[#3B73ED] hover:text-blue-400">
              {" "}
              Pinecone academy
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
