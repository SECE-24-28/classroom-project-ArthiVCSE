import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const AddPost = () => {
    const {title,setTitle,body,setBody,handleSubmit}=useContext(DataContext)
return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input><br></br>
            <textarea name='' id='' placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)}></textarea><br></br>
            <button type="submit">Save</button>
        </form>
    </div>
)
}

export default AddPost