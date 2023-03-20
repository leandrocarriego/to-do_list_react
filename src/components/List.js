import React from "react";
import ListItem from "./ListItem";
import Table from "react-bootstrap/Table";

const List = ({ tasks }) => {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        {tasks.map((element) => {
          <ListItem
            key={element.id}
            task={element.task}
            state={element.complete}
          />;
        })}
      </tbody>
    </Table>
  );
};

export default List;
