import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div>
        <form>
            <label>Search</label>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
    </div>
  )
}

export default Search