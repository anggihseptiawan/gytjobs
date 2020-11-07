import React from 'react'

const SearchForm = () => {
  return(
    <div className="container mx-auto">
      <form className="form flex items-center bg-white py-4 px-4 rounded-md -mt-8 shadow-md">
        <input type="text" name="keyword" className="px-4 bg-gray-200 flex-auto py-2 focus:outline-none rounded-md mr-4" placeholder="Filter by title, companies, expertise" />
        <input type="text" name="location" className="px-4 bg-gray-200 flex-auto py-2 focus:outline-none rounded-md mr-4" placeholder="Filter by title, companies, expertise" />
        <div className="checkbox flex-auto">
          <input type="checkbox" name="fulltime" className="bg-gray-500 rounded-sm mr-2 border-none" />
          <label className="font-bold">Full Time Only</label>
        </div>
        <button type="submit" className="px-8 py-3 flex-1 text-white bg-blue-600 rounded-sm hover:bg-blue-700 focus:outline-none">Search</button>
      </form>
    </div>
  )
}

export default SearchForm;