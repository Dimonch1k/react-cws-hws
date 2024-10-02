export const actionTypes = {
  addTask: "added",
  removeTask: "removed",
  toggleComplete: "toggleComplete",
  setTasks: "setTasks",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.addTask: {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000000000),
          title: action.payload.title,
          completed: false,
        },
      ];
    }

    case actionTypes.removeTask: {
      return state.filter((task) => task.id !== action.payload.taskId);
    }

    case actionTypes.toggleComplete: {
      return state.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, completed: !task.completed }
          : task
      );
    }

    default:
      return state;
  }
};

export default todoReducer;
