import React, { useState } from "react";

//Recibimos la props del padre (ViewTasks.js) y la obtenemos mediante destructuring
export const FormTasks = ({ addTask }) => {
  //Estado del formulario, donde almacenamos los datos
  const [formData, setFormData] = useState({
    id: Date.now(),
    text: "",
    completed: false,
  });

  //Estado para manejar las validaciones
  const [error, setError] = useState("");

  //Método para detectar los cambios en el cambio del formulario
  const handleChange = (e) => {
    //seteamos el nuevo estado con los datos introducdios (la nueva tarea)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    //Limpiamos el error cuando se empieza a escribir
    setError("");
  };

  //Método para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion para no aceptar tareas con menos de 5 letras
    if (formData.text.length < 5) {
      setError([...error, "Task must be at least 5 characters"]);
      return;
    }

    //Llamamos al método addTask del padre y le pasamos los datos del formulario
    addTask(formData);
    //Limpiamos los datos del formulario
    setFormData({
      id: Date.now(),
      text: "",
      completed: false,
    });
    //Limpiamos el error
    setError("");
  };

  return (
    <>
      <div className="border border-primary rounded p-5 mt-5">
        <h3 className="text-center">New Tasks</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              // usamos la clase de bootstrap 'is-invalid'
              className={`form-control mb-3 ${error ? "is-invalid" : ""}`}
              placeholder="Add a new task"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
            {/* usamos la clase de bootstrap invalid-feedback para mostrar el mensaje de error */}
            {error && <div className="invalid-feedback">{error}</div>}
            <button className="btn btn-primary" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
