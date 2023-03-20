import React, { Fragment } from "react";

const TaskRow = { item, onChange } => {

  return (
    <Fragment>
      <tr
        className={
          item.complete ? "text-decoration-line-through" : "text-decoration-none"
        }
        key={item.task}
      // onClick={handleComplete(item.complete)}
      >
        <td>
          <label>
            {/*(B) (C)*/}
            <input
              name={item.task}
              type="checkbox"
              defaultChecked={done}
              onChange={onChange}
            />
            <div >{item.task}</div>
          </label>
          </td>
      </tr>

  
    </Fragment>
  );

};

export default TaskRow;
