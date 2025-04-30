import Link from 'next/link'
import React from 'react'

const oprnbutton = () => {
  return (
  <section className='flex items-center justify-center'>
     <div className='w-96 h-16 bg-transparent border text-3xl  hover:bg-green-800 hover:text-black border-x-amber-600 border-y-green-800 rounded-3xl text-center p-3 text-bold text-white '>
        <Link href="test">TEST</Link>
    </div>
  </section> 
  )
}

export default oprnbutton 