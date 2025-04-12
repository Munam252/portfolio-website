import React from 'react'

function myFooter() {
  return (
    <div>
        <footer className="w-full py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          {/* Full-width line */}
          <div className="absolute w-full h-px bg-black"></div>
          
          {/* Centered content over the line */}
          <div className="z-10 px-4 bg-white">
            <span className="text-gray-600 text-sm">© 2025 Your Company</span>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default myFooter