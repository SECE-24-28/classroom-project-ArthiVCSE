import React from 'react'

const Student = ({stu,handleChange,handleDelete}) => {
  return (
    <div>
          <li key={stu.id}>
            <input type="checkbox" checked={stu.fee}
 onChange={()=>handleChange(stu.id)}
            />
            <label>{stu.sname}</label>
            <button onClick={()=>handleDelete(stu.id)}>Delete</button>
          </li>
    </div>
  )
}

export default Student