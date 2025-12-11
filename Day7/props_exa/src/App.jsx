import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
function App()
{
      const [list,setList] =useState([
        {id:1,sname:"Vinoth",fee:true},
        {id:2,sname:"Shiva",fee:false},
        {id:3,sname:"Harish",fee:true}
      ]);

      const handleDelete=(id)=>
      {
      const newList=list.filter((ls)=>ls.id!=id)
      setList(newList)
      }
      const handleCheck=(id)=>
      {
         const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
         setList(newList)
      }
  return (
    <>

    <Header title={"Student List"} dep={"CSE"} year={2025}/>

        <ul>
        {
           list.map((ls)=>
            <li key={ls.id}>
                  <input type="checkbox" checked={ls.fee} 
                  onChange={()=>handleCheck(ls.id)} />
                  <label>{ls.sname}</label>
                  <button onClick={()=>handleDelete(ls.id)}>Delete</button>
            </li>
          )
        }
        </ul>
           <br /><br />
           <p>Student count : {list.length}</p>
    </>
  )
}

export default App


    /*
    function App() {
  return (
    <>
    <Header title={"Students List"}
            /></>
  )
}
*/