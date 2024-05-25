import React from 'react'

const Buttonbox = () => {
  return (
    <div className='flex gap-2 items-center justify-between font-semibold mt-4 font-sans'>
        <button className=' px-4 p-2 rounded-full bg-gray-300 transition-all hover:bg-green-500'>Contact</button>
        <button className=' px-4 p-2 rounded-full bg-gray-300 transition-all hover:bg-green-500'>About</button>
        <button className=' px-4 p-2 rounded-full bg-gray-300 transition-all hover:bg-green-500'>Help</button>
    </div>
  )
}

export default Buttonbox
 