import React from 'react'

const SearchStudent = ({search,setSearch}) => {
  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchStudent