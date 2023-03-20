import React from "react";
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Container, Row, Col } from "react-bootstrap";


const Wrapper = ({ item }) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("tasks");
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        !tasks.find((item) => item.task === newTask)
            ? setTasks([
                ...tasks,
                newTask
            ])
            : alert("Ya has creado esa tarea");
    };

    return (
        <Container>
            <Row>
            <Col>
              <h1 className="text-center">To-Do App</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskForm addTask={addTask} />
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskList tasks={tasks} setTasks={setTasks}/>
            </Col>
          </Row>
        </Container>
    );
};

export default Wrapper;
