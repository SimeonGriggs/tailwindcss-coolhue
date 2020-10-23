import React, { useState } from 'react'

function App() {
  
  return (
    <div className="p-12 gap-12 text-center flex flex-wrap items-center justify-center text-gray-500 bg-gray-100">
      {[...Array(60).keys()].map(key => (
        <div key={key} className="h-40 w-32 flex flex-col rounded-lg shadow-lg">
          <div className={`w-32 h-32 bg-coolhue-${key + 1} rounded-t-lg flex-shrink-0`}></div>
          <div className='bg-white rounded-b-lg flex-1 flex items-center justify-start p-2 font-bold text-xs uppercase'>
            Coolhue {key + 1}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
