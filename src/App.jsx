import React, { useState } from 'react'

function App() {
  return (
    <div className="p-4 text-center flex items-center justify-center space-x-8 h-screen text-gray-500 bg-gray-100">
      <div className="w-32 flex flex-col rounded-lg shadow-lg">
        <div className="w-32 h-32 bg-coolhue-5 rounded-t-lg"></div>
        <div className='bg-white rounded-b-lg h-12 flex items-center justify-start p-2 font-bold text-xs uppercase'>
          Coolhue 5
        </div>
      </div>
      <div className="w-32 flex flex-col rounded-lg shadow-lg">
        <div className="w-32 h-32 bg-coolhue-35 rounded-t-lg"></div>
        <div className='bg-white rounded-b-lg h-12 flex items-center justify-start p-2 font-bold text-xs uppercase'>
          Coolhue 35
        </div>
      </div>
      <div className="w-32 flex flex-col rounded-lg shadow-lg">
        <div className="w-32 h-32 bg-coolhue-56 rounded-t-lg"></div>
        <div className='bg-white rounded-b-lg h-12 flex items-center justify-start p-2 font-bold text-xs uppercase'>
          Coolhue 56
        </div>
      </div>
    </div>
  )
}

export default App
