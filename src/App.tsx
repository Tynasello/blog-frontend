import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;

//
// try {
//     const result = await fetch(
//       `https://tynasello-blog-api.herokuapp.com/blog/user`,
//       {
//         method: "GET",
//         headers: {
//           "x-access-token": localStorage.getItem("token") || " ",
//         },
//       }
//     );
//     const res = await result.json();
//   } catch (err) {
//     console.log("Invalid token");
//   }
