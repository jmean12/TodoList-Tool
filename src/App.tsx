import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/todolist";
import Training from "./pages/training";
import TrainingPage from "./pages/training/page";

function App(): any {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/training' element={<Training />} />
        <Route path='/training/:page' element={<TrainingPage />} />
      </Routes>
    </>
  )
};

export default App;
