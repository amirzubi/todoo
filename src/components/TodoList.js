// Import components
import Todo from "./Todo";
import doggie from "../images/doggie.gif";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  if (filteredTodos != "") {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="no-tasks">
        <img src={doggie} />
        <h3>No tasks in here.</h3>
      </div>
    );
  }
};

export default TodoList;
