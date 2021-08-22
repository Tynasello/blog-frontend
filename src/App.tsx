/*--------------------------------------------------------------*/

import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";

/*--------------------------------------------------------------*/

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
};

/*--------------------------------------------------------------*/

export default App;

/*--------------------------------------------------------------*/
