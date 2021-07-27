const Filter = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="filter">
      <ul onClick={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </ul>
    </div>
  );
};

export default Filter;
