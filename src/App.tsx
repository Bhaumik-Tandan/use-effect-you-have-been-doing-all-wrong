import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import components, { ComponentDefinition } from "./pages"; // Correct import statement

interface PageComponentProps {
  currentPageIndex: number;
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const App: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const componentToRender = components[currentPageIndex];

  const goToPreviousPage = () => {
    setCurrentPageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prevIndex) =>
      Math.min(components.length - 1, prevIndex + 1)
    );
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={goToPreviousPage} disabled={currentPageIndex === 0}>
                {"<"} Previous
              </button>
            </li>
            <componentToRender.component />
            <li>
              <button onClick={goToNextPage} disabled={currentPageIndex === components.length - 1}>
                Next {" >"}
              </button>
            </li>
          </ul>
        </nav>

        <Routes>
          {components.map((comp: ComponentDefinition, index: number) => (
            <Route key={comp.routeName} path={`/${comp.routeName}`} element={<comp.component />} />
          ))}
        </Routes>

      </div>
    </Router>
  );
};

export default App;
