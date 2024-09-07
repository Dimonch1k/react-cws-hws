import "../../../styles/components/todoList/todoItem/DeleteTask.scss";
import redCrossCircle from "../../../images/todo/red-cross-circle_icon.png";

const DeleteTask = ({ removeTaskHandler, task }) => {
  return (
    <>
      <button className="delete-btn" onClick={() => removeTaskHandler(task.id)}>
        <img src={redCrossCircle} alt="red cross icon" className="delete-img" />
      </button>
    </>
  );
};

export default DeleteTask;
