import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import './App.css'

const Search = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <div className='search-container'>
        <label for='search'>Search Here:</label>
        <input type="text" name="search" placeholder= "search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search