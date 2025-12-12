import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { useParams } from 'react-router-dom'


const EditPost = () => {

    const {posts,handleDelete}=useContext(DataContext)
    const {id}=useParams()
    const post=posts.find((p)=>p.id==id)
    if(!post)
        return (
            <div>
                <h2>There is no data...</h2>
            </div>
    )
    return(
    <div>
        <h3>Edit Post</h3>
        <form>
            <input type="text" value={post.title} />
            <br/>
            <textarea rows= "5" value={post.body}/>
            <br/>  
        </form>
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
            <br></br><br></br>
            <button>Save Edits</button>
    </div>
    )
}

export default EditPost