import React from "react";
import TaskForm from "../../components/TaskForm/TaskForm";

const NewTask = () => {
  return (
    <>
      <h3 className="pt-4 pb-4">
        Agregar tarea nueva
      </h3>
      <TaskForm />
    </>
  );
};

export default NewTask;
