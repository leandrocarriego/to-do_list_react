import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TaskForm = ({ addTask }) => {

  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: (+new Date()).toString(),
      task: userInput,
      complete: false,
    });
    setUserInput('');
  }
  
  const handleOnChange = (e) => {
    setUserInput(e.target.value);
  } 
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nueva tarea</Form.Label>
        <Form.Control type="text" placeholder="Escribe aqui tu nueva tarea" value={userInput} disabled={userInput ? "" : "disabled"} onChange={handleOnChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar tarea
      </Button>
    </Form>
  );
};

export default TaskForm;
