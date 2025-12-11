import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Two = () => {
    const {name,count}=useContext(DataContext)
  return (
    <div>
        <h1>Employee name: {name}</h1>
        <p>Age : {count}</p>
    </div>
  )
}

export default Two
