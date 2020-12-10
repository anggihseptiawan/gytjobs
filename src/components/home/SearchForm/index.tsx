import React, { useState } from 'react'
import useFetch from '@/hook/useFetch'

const SearchForm = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const search = async () => {
    const data = await useFetch(keyword, location)
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <form className="form flex items-center bg-white py-4 px-4 rounded-md -mt-8 shadow-md">
        <input
          type="text"
          name="keyword"
          className="px-4 bg-gray-200 flex-auto py-2 focus:outline-none rounded-md mr-4"
          placeholder="Filter by title, companies, expertise"
          onChange={e => setKeyword(e.target.value)}
        />
        <input
          type="text"
          name="location"
          className="px-4 bg-gray-200 flex-auto py-2 focus:outline-none rounded-md mr-4"
          placeholder="Filter by location"
          onChange={e => setLocation(e.target.value)}
        />
        <div className="checkbox flex-auto">
          <input type="checkbox" name="fulltime" className="bg-gray-500 rounded-sm mr-2 border-none" />
          <label className="font-bold">Full Time Only</label>
        </div>
        <button
          type="button"
          className="px-6 py-3 flex-1 text-white bg-blue-600 rounded-sm hover:bg-blue-700 focus:outline-none"
          onClick={search}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm
