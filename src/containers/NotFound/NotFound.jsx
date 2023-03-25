import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Error 404 - Not found</h1>
      <p>Puedes dirigirte a una de las siguientes secciones:</p>
      <ul >
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/newtask">Nueva tareas</Link>
        </li>
      </ul>
    </>
  );
};

export default NotFound;
