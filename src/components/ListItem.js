import React from "react";

const ListItem = ({ item }) => {
  return (
    <tr>
      <td>{item.task}</td>
    </tr>
  );
};

export default ListItem;
