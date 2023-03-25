import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./containers/Home/Home";
import NewTask from "./containers/NewTask/NewTask";
import NotFound from "./containers/NotFound/NotFound";



function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider breakpoints={["lg", "md", "sm"]} minBreakpoint="sm">
          <Wrapper>
            <Routes>
            <Route path="/" element={<Home />} />

              <Route path="/new-task" element={<NewTask />} />

              <Route path="/edit-task/:id" element={<NewTask />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
