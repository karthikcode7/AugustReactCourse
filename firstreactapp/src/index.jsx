// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('reactApp'));
// root.render(
//   <React.StrictMode>
//    <h1>Hello World</h1>
//   </React.StrictMode>
// );

import React from "react";
//import ReactDom from "react-dom";
import ReactDom from "react-dom/client";
import Firstcomponent from "./firstcomp";

// //arrow functions
// let Firstcomp = () => {
//   return (
//     <div>
//       <h1>Welcome To React Course</h1>
//       <h2>XYZ</h2>
//     </div>
//   );
// };

// this below line is used to make the 
const root =  ReactDom.createRoot(document.getElementById("reactApp"));
root.render(
  <Firstcomponent/>
)
//ReactDom.render(<Firstcomp />, document.getElementById("reactApp"));
