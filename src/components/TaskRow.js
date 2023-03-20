import React from "react";



const TaskRow = ({ item }) => {


  return (
    <tr
      className={
        item.complete ? "text-decoration-line-through" : "text-decoration-none"
      }
      key={item.task}
      // onClick={handleComplete(item.complete)}
    >
      <td>{item.task}</td>
    </tr>
  );
};

export default TaskRow;
