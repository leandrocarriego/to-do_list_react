import React, { Fragment } from "react";
import { InputGroup, Form } from "react-bootstrap";

const TaskRow = ({ item, onChange }) => {
  return (
    <Fragment>
      <tr
        className={
          item.complete
            ? "text-decoration-line-through"
            : "text-decoration-none"
        }
        key={item.task}
        // onClick={handleComplete(item.complete)}
      >
        <td>
        <Form.Text as="checkbox" name={item.task} defaultChecked={item.complete} >
        {item.task}
        </Form.Text>
          {/* <InputGroup as="td" className="mb-3">
            <InputGroup.Checkbox aria-label="task" name={item.task} defaultChecked={item.complete}/>
            <InputGroup.Text>{item.task}</InputGroup.Text>
          </InputGroup> */}
        </td>
      </tr>
    </Fragment>
  );
};

export default TaskRow;
