import React from 'react'
import { Tdata } from '../lib/type'


const Signlereview = (props:Tdata) => {
    const {title,desc,stars} = props;
  return (
    <div className='flex flex-col gap-0 font-sans'>
    <p className='text-base sm:text-lg font-semibold'>{title}</p>
    <p className=' text-sm sm:text-base'>{desc}</p>
    <div className='flex gap-1 my-1 items-center'>
    {stars.map((item,idx:number)=> {return <span className='text-xl text-yellow-500' key={idx}>{item}</span>})}
    </div>
  </div>
  )
}

export default Signlereview