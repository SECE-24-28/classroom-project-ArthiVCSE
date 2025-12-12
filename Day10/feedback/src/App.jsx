import { useEffect, useState } from 'react'
import api from './api/Post'
import './App.css'
import Home from './Home'
import { DataProvider } from './context/DataContext'
import { Link, Route, Routes } from 'react-router-dom'
import EditPost from './EditPost'
import AddPost from './AddPost'
import Search from './Search'

function App() {
  return (
    <DataProvider>
      <>
 
<div className="navbar">
  <div className="nav-left">
    <Search />
  </div>
  <div className="nav-right">
    <Link to="/">Home</Link>
    <Link to="/newpost">New Post</Link>
  </div>
</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<AddPost />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Routes>
      </>
    </DataProvider>
  )
}

export default App
