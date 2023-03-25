import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const tasksState = useSelector(state => state.tasks)

  return (
    <>
      <h3 className="pt-4 pb-4">Tareas pendientes: {tasksState.filter((task) => !task.complete).length}</h3>
    </>
  );
};

export default Counter;
