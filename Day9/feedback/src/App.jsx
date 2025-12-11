import { useEffect, useState } from 'react'
import api from './api/Post'
import './App.css'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { format } from 'date-fns'
import { DataProvider } from './context/DataContext'

function App() {

  return(
    <>
    <DataProvider>
      <Search/>
      <AddPost/>
      <Home/>
    </DataProvider>
    </>
  )
}


export default App
