import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
  const { searchResult } = useContext(DataContext)

return (
    <div className="home-container">
      <div className="post-list">

        {searchResult.map((post) => (
          <div className="post" key={post.id}>
            <Link to={`/editpost/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.dateTime}</p>
              <p>{post.body}</p>
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Home
