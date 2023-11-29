import React, { useState } from "react";
import { FormTasks } from "../FormTasks/FormTasks";
import { TableTasks } from "../TableTasks/TableTasks";

export const ViewTasks = () => {
  //Estado para almacenar la lista de tareas, comienza con un array vacío
  const [tasks, setTasks] = useState([]);
  //Estado para manejar el filtro de tareas entre hechas y no hechas. Lo iniciamos mostrando todas las tareas
  const [taskFilter, setTaskFilter] = useState("all");

  //Método para agregar nueva tarea
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  //Método para manejar el estado de una tarea (completada o no completada)
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Método para filtrar las tareas según el filtro que se seleccione
  const filterTasks = (filter) => {
    setTaskFilter(filter);
  };

  //Filtro de tareas según el estado de completado
  const filteredTasks =
    taskFilter === "all"
      ? tasks
      : taskFilter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  //Contador de tareas sin completar
  const incompleteTasksCount = tasks.filter((task) => !task.completed).length;

  //Método para eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FormTasks addTask={addTask} />
          </div>
          <div className="col-md-8">
            <TableTasks
              tasks={filteredTasks}
              completeTask={completeTask}
              filterTasks={filterTasks}
              incompleteTasksCount={incompleteTasksCount}
              deleteTask={deleteTask}
            />
          </div>
        </div>
      </div>
    </>
  );
};
