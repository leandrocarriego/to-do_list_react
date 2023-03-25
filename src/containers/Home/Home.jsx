import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import Counter from "../../components/Counter/Counter";

const Home = () => {
  return (
    <>
      <Counter />
      <TaskList />
    </>
  );
};

export default Home;
