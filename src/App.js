import { ThemeProvider, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [ tasks ]);

  const addTask = (newTask) => {
    !tasks.find((item) => item.task === newTask)
      ? setTasks([
          ...tasks,
          {
            id: 0,
            task: newTask,
            complete: false,
          },
        ])
      : alert("Ya has creado esa tarea");
  };

  // const changeTaskState = (taskName) => {
  //   tasks.map((item) => { if (item.task === taskName) {
  //     item.complete ? 
  //     console.log(item.complete)
        
  //      : 
  //       console.log(item.complete)
  //   }
  //       });
    
      // ? setTasks([
      //     ...tasks,
      //     {
      //       id: 0,
      //       task: newTask,
      //       complete: false,
      //     },
      //   ])
      // : alert("Ya has creado esa tarea");

  

  return (
    <div>
      <ThemeProvider breakpoints={["lg", "md", "sm"]} minBreakpoint="sm">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">To-Do App</h1>
              <h3>Tienes <Counter tasks={tasks} /> tareas pendientes</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskForm addTask={addTask} />
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskList tasks={tasks} />
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
