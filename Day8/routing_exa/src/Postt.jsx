import React from 'react'
import { useParams } from 'react-router-dom'

const Postt = () => {
    const {id}=useParams()
  return (
    <div>Post - {id}</div>
  )
}

export default Postt