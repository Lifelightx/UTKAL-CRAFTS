import React, { useContext } from 'react';
import { StoreContext } from './Context';

function App() {
  const {url} = useContext(StoreContext)
  return (
    <>
      <h1 className="text-4xl text-red-500">Your backend url is:  {url} </h1>
    </>
  )
}

export default App
