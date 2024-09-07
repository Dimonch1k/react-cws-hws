import React, { useCallback } from "react";

import "../../../styles/components/todoList/todoFilters/Todo-filters.scss";

const TodoFilters = ({ setCurrentFilter, currentFilter, filtersMap }) => {
  const filterNames = Object.keys(filtersMap); // [ All, Done, Todo ]

  const handleSetCurrentFilter = useCallback(
    (filterName) => {
      setCurrentFilter(filterName);
    },
    [setCurrentFilter]
  );

  return (
    <div className="filter">
      <img
        src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/11-512.png"
        alt="completed task icon"
        style={{ maxWidth: "25px", maxHeight: "25px", marginLeft: "10px" }}
      />

      <div className="filter-buttons">
        {filterNames.map((filterName) => (
          <button
            key={filterName}
            onClick={() => handleSetCurrentFilter(filterName)}
          >
            {filterName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilters;
