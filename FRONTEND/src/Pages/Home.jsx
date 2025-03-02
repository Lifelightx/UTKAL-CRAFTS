import React, { useContext } from 'react'
import { StoreContext } from '../Context'

function Home() {
    const {url} = useContext(StoreContext)
  return (
    <div>
      <h1>Hello world {url}</h1>
    </div>
  )
}

export default Home
