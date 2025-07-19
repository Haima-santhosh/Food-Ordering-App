import React from 'react'

const SearchBar = ({search,setSearch}) => {
  
  return (
    <div className="w-1/3">
        <input
          type="text"
          placeholder="Search by restaurent name or food..."
          className="bg-slate-100 w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
         
          value={search}

          onChange={(e)=>setSearch(e.target.value)}
        
        
        
        />
      </div>
  )
}

export default SearchBar