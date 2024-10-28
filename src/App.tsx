import React from 'react';
import {load} from "./files/loader/main";
import img from "./files/img.jpg"
console.log()

document.addEventListener("DOMContentLoaded" , load)
function App() {
  return (
      <div>
        <img className={"back"} />
        <div className={"title"}>
          <img src={img}/>
          <p className={"testfont"}>Hello world</p>
            <progress value={90} max={100}></progress>
        </div>
      </div>
  );
}

export default App;
