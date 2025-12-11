import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full screen height
        margin: 0,
      }}
    >
      <Counter />
    </div>
  );
};

export default App;

/*import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'


function App() {
let demo=(name)=>{
  console.log("Hello " + name);
}

  return (
    <>
    <Header/>
    <Content/>  
<button onClick={()=>demo("Arthi")}>Click Me</button>
    </>
  )
}

export default App*/
