import React from "react";
import { useSelector } from "react-redux";
import TaskRow from "../TaskRow/TaskRow";
import Table from "react-bootstrap/Table";

const TaskList = () => {

  const tasksState = useSelector(state => state.tasks)

  return (
   
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th className="w-100">Tareas</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasksState.map((task) =>
            <TaskRow item={task} key={task.id}/>
        )}
      </tbody>
    </Table>
    
  );
};

export default TaskList;
