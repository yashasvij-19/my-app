import React from 'react'
import './App.css';
const App = () => {
const [count,setCount] = React.useState(0);
  function changeShape(){
    var x = document.getElementById("mySelect").value;
    var y = document.getElementById("shapes-holder");

    if(x === "square"){
      let divS = document.createElement("div");
      divS.className = "square";
      divS.textContent = count;
      setCount(count+1);
      y.appendChild(divS);

    }else if(x === "circle"){
let divC = document.createElement("div");
divC.className = "circle";
divC.textContent = count;
setCount(count+1);
y.appendChild(divC);
    }
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select id="mySelect" defaultValue="square">
  <option value="square">Square</option>
  <option value="circle">Circle</option>
</select>
<button onClick={changeShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
      </div>
    </div>
  )
}


export default App;