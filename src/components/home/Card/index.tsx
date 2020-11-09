import React from 'react'

const Card = ({ data }): any => {
  return (
    <div className="w-1/4 card bg-white rounded-sm p-5 mr-4 mb-4">
      <img src={data.company_logo} alt={data.company} className="w-100 mb-2 h-20 object-contain" />
      <small className="text-gray-600">5h ago. {data.type}</small>
      <p className="font-bold">{data.title}</p>
      <small className="text-gray-600 block">{data.company}</small>
      <small className="text-blue-600 block mt-4">{data.location}</small>
    </div>
  )
}

export default Card
