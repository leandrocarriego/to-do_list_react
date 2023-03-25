import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { completeTask, deleteTask } from "../../features/tasks/taskSlice";

const TaskRow = ({ item }) => {
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTask(id))
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <Fragment>
      <tr>
        <td>
          <div
            onClick={() => {
              handleComplete(item.id);
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
        <td>
          <Link
            to={`/edit-task/${item.id}`}
          >
            <Button
              variant="success"
            >
              Edit
            </Button>
          </Link>
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default TaskRow;
