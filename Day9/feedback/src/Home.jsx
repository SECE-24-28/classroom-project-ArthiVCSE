import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
    const {searchResult}=useContext(DataContext)
return (
    <div>
        {
        searchResult.map((post)=>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.dateTime}</p>
                <p>{post.body}</p>
                <hr/>
            </div>
        )
    }
    </div>
)}
export default Home