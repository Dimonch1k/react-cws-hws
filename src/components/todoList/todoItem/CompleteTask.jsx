import "../../../styles/components/todoList/todoItem/CompleteTask.scss";

import checked from "../../../images/todo/checked.jpg";
import unchecked from "../../../images/todo/unchecked.jpg";

const CompleteTask = ({ toggleCompleteHandler, task }) => {
  return (
    <>
      <button
        className="complete-btn"
        onClick={() => toggleCompleteHandler(task.id)}
      >
        <img
          src={task.completed ? checked : unchecked}
          alt="checked unchecked"
        />
      </button>
    </>
  );
};

export default CompleteTask;
