import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 '>
      <div className='text-center py-4 px-6  mb-4'>
        <h1 className='text-5xl font-bold text-zinc-800 py-2'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-700'>Let AI enhance your memories </p>
        <p></p>
      </div>
      
    
<Home/>

<div className='text-center text-gray-400 text-sm mt-2'>
      <p>Powered by @DeveloperSarim</p>

</div>
    </div>
  )
}

export default App
