import React, { Fragment } from "react";

const TaskRow = ({ item, handleComplete }) => {
  return (
    <Fragment>
      <tr>
        <td>
          <div
            onClick={(e) => {
              console.log(e);
              handleComplete(item);
            }}
            className={
              item.complete
                ? "text-decoration-line-through"
                : "text-decoration-none"
            }
          >
            {item.task}
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default TaskRow;
