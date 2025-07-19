import React from 'react'

const SortDropdown = ({sort,setSort}) => {

  
  return (
    <div className="w-1/3">
      <select className=" bg-slate-100 w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 "
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        <option value="" >Select Sort Option</option>
        <option value="ratingHigh">Rating: High to Low</option>
        <option value="ratingLow">Rating: Low to High</option>
        <option value="deliveryFast">Delivery Time: Fastest</option>
        <option value="deliverySlow">Delivery Time: Slowest</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="priceLow">Price: Low to High</option>
      </select>
    </div>
  )
}

export default SortDropdown