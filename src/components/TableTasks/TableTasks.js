import React from "react";

//Recibimos las props del padre (ViewTasks.js) aplicando destructuring
export const TableTasks = ({
  tasks,
  completeTask,
  filterTasks,
  incompleteTasksCount,
  deleteTask,
}) => {
  return (
    <>
      {/* Botones para manejar los filtrados */}
      <div className="mb-3 text-center">
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => filterTasks("all")}
        >
          All
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={() => filterTasks("completed")}
        >
          Completed
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => filterTasks("incompleted")}
        >
          Incomplete
        </button>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-dark text-center">
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.text}</td>
              <td className="text-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => completeTask(task.id)}
                />
              </td>
              <td className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <p className="display-6 text-info">
          Tasks for complete: {incompleteTasksCount}
        </p>
      </div>
    </>
  );
};
