import React from 'react'
import Hero from '../components/summarize/Hero'
import Demo from '../components/summarize/Demo'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className=' relative z-10'>
        <Navbar />
      </div>
      <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm: px-16">

        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default page