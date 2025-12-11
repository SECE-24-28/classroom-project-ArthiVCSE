import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let city="Cbe"
let nums=[11,22,33]

return(
  <div> 
  <p>I am from {city}</p>
  <p>Lucky Numbers : {[10,20,30]}</p>
  <p>Array numbers : {nums}</p>
  <p>{"true"}</p> 
  <p>{JSON.stringify({name:"Arthi",age:"18"})}</p>
  </div>
)
}
export default App
