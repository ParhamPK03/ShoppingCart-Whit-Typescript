import React from "react";
import "./App.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  const router = useRoutes(routes);

  return (
    // <ContextDataProvider>
    <div className="app">
      <Header />
      {/* Start Content */}

      {router}

      {/* Finish Content */}

      <footer>
        <a target={"_blank"} href="https://sabzlearn.ir">
          Sabzlearn.ir
        </a>
      </footer>
    </div>
    // </ContextDataProvider>
  );
}

export default App;
