import logo from './logo.svg';
import { useState } from 'react';
import data from './data.json';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';

function App() {
  const [tasks, setTasks] = useState(data);
  console.log(tasks)
  return (
    <div className="App">
      <List tasks={tasks} />
    </div>
  );
}

export default App;
