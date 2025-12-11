import React, { useRef } from 'react';

const AddStudent = ({newstu,setNewStu,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='New Student' value={newstu} onChange={(e)=>setNewStu(e.target.value)} ref={inputRef}/>
            <button type='submit' onClick={()=>inputRef.current.focus()}>Submit</button>        </form>
    </div>
  )
}

export default AddStudent