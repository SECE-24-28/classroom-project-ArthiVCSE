import './App.css'
import AddStudent from './AddStudent'
import SearchStudent from './SearchStudent'
import Body from './Body'
import { useState, useEffect } from 'react';

function App()
{
    const [stuList, setStuList] = useState([]);

    const handleDelete=(id)=>
    {
      const newList=stuList.filter((stu)=>stu.id!==id)
      setStuList(newList)
    }

    const handleChange=(id)=>
    {
      const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
      setStuList(newList)
    }

   const addItem=(item)=>
   {
    const sz=stuList.length-1;
     const nid=(stuList.length)?(stuList[sz].id+1):(1)
     const newObj={id:nid,sname:item,fee:false}
     const newList=[...stuList,newObj]
     setStuList(newList)
   }

   const handleSubmit=(e)=>
   {
    e.preventDefault()
    addItem(newstu)
    setNewStu('')
   }
    const [newstu,setNewStu]=useState('')
    const [search,setSearch]=useState('')

   useEffect(() => {
    const tem_List = [
      { id: 1, sname: 'Jack', fee: true },
      { id: 2, sname: 'Smith', fee: false },
      { id: 3, sname: 'Victor', fee: true },
    ];
    setStuList(tem_List);
  }, []);


  return (
    <>
       <h1>Students List</h1>
       <AddStudent  newstu={newstu}
                    setNewStu={setNewStu}
                    handleSubmit={handleSubmit}
       />
       <SearchStudent search={search}
                      setSearch={setSearch}
       />
       
       <Body stuList={stuList.filter((list)=>(list.sname).includes(search))}
             handleChange={handleChange}
             handleDelete={handleDelete}
       />
    </>
  )
}

export default App
