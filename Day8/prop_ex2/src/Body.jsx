import React from 'react'
import Student from './Student'

const Body = ({stuList,handleChange,handleDelete}) => {
  return (
    <div>
        <ul>
       {
        stuList.map((stu)=>
          <Student stu={stu}
                   handleChange={handleChange}
                handleDelete={handleDelete} 
          />
        )
       }
       </ul>
    </div>
  )
}

export default Body