import React from "react";
import TaskRow from "./TaskRow";
import Table from "react-bootstrap/Table";

const TaskList = ({ tasks }) => {


  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) =>
            <TaskRow item={task} />
        )}
      </tbody>
    </Table>
  );
};

export default TaskList;
