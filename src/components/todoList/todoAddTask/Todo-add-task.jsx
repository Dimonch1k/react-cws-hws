import React, { useState, useCallback } from "react";

import "../../../styles/components/todoList/todoAddTask/TodoAddTask.scss";

import todoList from "../../../images/todo/todoList.png";
import addTaskIcon from "../../../images/todo/add-task_icon.jpg";

const TodoAddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const addTaskHandler = useCallback(
    (title) => {
      if (title.trim().length < 5) return;
      addTask(title);
      setTitle("");
    },
    [addTask]
  );

  return (
    <div className="add-task">
      <img src={todoList} alt="Todo list icon" className="add-task__icon" />

      <input
        type="text"
        className="add-task__text"
        id="add-task-text"
        placeholder="Enter your next task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTaskHandler(title);
        }}
      />

      <button className="add-task__btn" onClick={() => addTaskHandler(title)}>
        <img
          src={addTaskIcon}
          alt="white plus icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default TodoAddTask;
