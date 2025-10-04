// import React, { useState } from 'react'
// import FileUploader from '../components/FileUploader'
// import LoadingSpinner from '../components/LoadingSpinner'
// import RiskReport from '../components/RiskReport'
// import ErrorBoundary from '../components/ErrorBoundary'

// export default function Home() {
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)

//   return (
//     <ErrorBoundary>
//       <div className="container mx-auto p-6 text-center">
//         <h1 className="text-2xl font-bold mb-4">AI Health Risk Profiler</h1>

//         {/* Pass setLoading and setResult to FileUploader */}
//         <FileUploader onResult={setResult} setLoading={setLoading} />

//         {/* Show spinner while loading */}
//         {loading && <LoadingSpinner />}

//         {/* Show results when available */}
//         {result && <RiskReport result={result} />}
//       </div>
//     </ErrorBoundary>
//   )
// }

// import React, { useState } from 'react'
// import FileUploader from '../components/FileUploader'
// import LoadingSpinner from '../components/LoadingSpinner'
// import RiskReport from '../components/RiskReport'
// import ErrorBoundary from '../components/ErrorBoundary'

// export default function Home() {
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)

//   return (
//     <ErrorBoundary>
//       <div className="container mx-auto p-6 text-center">
//         <h1 className="text-2xl font-bold mb-4">AI Health Risk Profiler</h1>

//         <FileUploader onResult={setResult} setLoading={setLoading} />

//         {loading && <LoadingSpinner />}

//         {result && <RiskReport result={result} />}
//       </div>
//     </ErrorBoundary>
//   )
// }
import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import LoadingSpinner from "../components/LoadingSpinner";
import RiskReport from "../components/RiskReport";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          AI Health Risk Profiler
        </h1>

        {/* File Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload Survey Image</h2>
          <FileUploader
            onResult={(r) => setResult(r)}
            setLoading={setLoading}
          />
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="mb-4">
            <LoadingSpinner />
          </div>
        )}

        {/* Risk Report Section */}
        {result && (
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
            <RiskReport result={result} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
