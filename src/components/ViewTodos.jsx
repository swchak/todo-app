import { Typography } from "@mui/material";

const ViewTodos = ({ toDos }) => {
  return (
    <div className="view-todos-root">
      <div className="view-todos-title">
        <Typography variant="h6" componen="h6">
          List of Todos
        </Typography>
      </div>
      <div>
        <table className="view-todos-content-root">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">To do</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map((todo, index) => {
              return (
                <tr key={index}>
                  <th scope="row"> {index}</th>
                  <td scope="row"> {todo.text}</td>
                  <td scope="row">
                    <input
                      type="checkbox"
                      value={todo.completed}
                      className="todo-completed-checkbox"
                    ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTodos;
