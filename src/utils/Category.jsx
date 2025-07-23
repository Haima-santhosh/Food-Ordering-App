import React from 'react'

const Category = ({category,setCategory}) => {

  
  const categories = [
    'Main Course',
    'Fast Food',
    'Wraps',
    'Desserts',
    'Beverages',
    'Salads',
    'Healthy',
    'Starters',
  ];

  

  return (
   <div className="w-1/3 ">
        <select className="w-full px-4 py-2 rounded-lg border bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}>

          <option value="" disabled>
          Select Category
        </option>
{categories.map((item,index)=>
(
  <option key={index} value={item}>{item}</option>
))}
        
        
        </select>
          
      </div>
  )
}


export default Category