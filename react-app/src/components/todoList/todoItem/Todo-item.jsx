import "../../../styles/components/todoList/todoItem/Todo-Item.scss";

import CompleteTask from "./CompleteTask";
import TaskTitle from "./TaskTitle";
import DeleteTask from "./DeleteTask";
import { useCallback } from "react";

const TodoItem = ({ task, removeTask, toggleComplete }) => {
  const removeTaskHandler = useCallback(
    (taskId) => {
      removeTask(taskId);
    },
    [removeTask]
  );

  const toggleCompleteHandler = useCallback(
    (taskId) => {
      toggleComplete(taskId);
    },
    [toggleComplete]
  );

  return (
    <div className="list-item" style={{ opacity: task.completed && "0.5" }}>
      <CompleteTask toggleCompleteHandler={toggleCompleteHandler} task={task} />
      <TaskTitle task={task} />
      <DeleteTask removeTaskHandler={removeTaskHandler} task={task} />
    </div>
  );
};

export default TodoItem;
