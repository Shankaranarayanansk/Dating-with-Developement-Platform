import React from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()

const Blockchain = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-poppins">
      <div>
        <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">
          This recommendation will be coming soon
        </h2>
        <div className="text-lg flex items-center justify-center font-bold text-red-600" data-aos="fade-left">
          Blockchain
        </div>
      </div>
    </div>
  )
}

export default Blockchain