import React, { useContext } from 'react'
import { StoreContext } from '../Context'

function Home() {
    const {url} = useContext(StoreContext)
  return (
    <div className='py-4'>
      <h1 className='text-[#bf4221] text-4xl font-bold'>Every Thread Tells a Story, <br /> Every Craft Builds a Dream – Bringing Rural Odisha’s Heart to Your Hands</h1>
    </div>
  )
}

export default Home
