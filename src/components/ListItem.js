import React from "react";

const ListItem = ({ taskId, taskTitle, taskState }) => {
  return (
    <>
      <tr>
        <td>{taskTitle}</td>
      </tr>
    </>
  );
};

export default ListItem;
