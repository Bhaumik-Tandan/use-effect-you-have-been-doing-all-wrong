import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import components, { ComponentDefinition } from "./pages"; // Correct import statement
import Home from "./pages/Home";

const App: React.FC = () => {


  return (
    <Router>
      <div>

        <Routes>
        <Route
        path="/"
            element={<Home/>}
          />
          {components.map((comp: ComponentDefinition, index: number) => (
            <Route
              key={comp.routeName}
              path={`/${comp.routeName}`}
              element={<comp.component />}
            />
          ))}
        </Routes>

      </div>
    </Router>
  );
};

export default App;
