import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
      <p className="ml-3 text-gray-700 font-medium">Analyzing...</p>
    </div>
  )
}
