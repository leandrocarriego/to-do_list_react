import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, Button } from "react-bootstrap";
import { addTask, editTask } from "../../features/tasks/taskSlice";

const TaskForm = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [userInput, setUserInput] = useState({
    id: '',
    task: '',
    complete: false
  });

  useEffect(() => {
    if (params.id) {
      setUserInput(tasks.find((task) => task.id == params.id))
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(
        editTask(
        userInput
      ));
    } else {
      dispatch(
        addTask(
        {
          ...userInput,
        id: uuid()
      }
      ));
    }
    
    setUserInput('');
    navigate('/')
  }

  const handleOnChange = (e) => {
    setUserInput(
      {...userInput,
      task: e.target.value
      }
      );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nueva tarea</Form.Label>
        <Form.Control
          type="text"
          placeholder="Escribe aqui tu nueva tarea"
          value={userInput.task}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={userInput.task ? "" : "disabled"}
      >
        Agregar tarea
      </Button>
    </Form>
  );
};

export default TaskForm;
