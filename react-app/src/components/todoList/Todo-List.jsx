import { useReducer, useState, useEffect, useCallback } from "react";
import { taskList } from "./taskList";
import todoReducer, { actionTypes } from "../../pages/reducers/todoReducer";

import "../../styles/components/todoList/Todo.scss";

import TodoAddTask from "./todoAddTask/Todo-add-task";
import TodoFilters from "./todoFilters/Todo-filters";
import TodoItem from "./todoItem/Todo-item";
import TodoHeader from "./Todo-header";

const initializeTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : taskList;
};

const filtersMap = {
  All: () => true,
  Done: (task) => task.completed,
  Todo: (task) => !task.completed,
};

const TodoList = () => {
  const [tasks, dispatch] = useReducer(todoReducer, [], initializeTasks);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((title) => {
    dispatch({ type: actionTypes.addTask, payload: { title } });
  }, []);

  const removeTask = useCallback((taskId) => {
    dispatch({ type: actionTypes.removeTask, payload: { taskId } });
  }, []);

  const toggleComplete = useCallback((taskId) => {
    dispatch({ type: actionTypes.toggleComplete, payload: { taskId } });
  }, []);

  return (
    // .To Do
    <div className="todo">
      {/* Header */}
      <TodoHeader />

      {/* Add item to Todo List */}
      <TodoAddTask addTask={addTask} />

      <div className="todo-wrapper">
        {/* Filters */}
        <TodoFilters
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          filtersMap={filtersMap}
        />

        {/* Task list */}
        <div className="task-list">
          {/* Fill task list with basic tasks */}
          {tasks.filter(filtersMap[currentFilter]).map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
