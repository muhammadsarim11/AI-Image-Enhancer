import React from 'react'

const Imagepreview = (props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      <div className='w-60 bg-white shadow-md rounded-lg h-60 overflow-hidden '>
        <h2 className='text-sm font-medium bg-zinc-900 text-center text-white '>Original Image</h2>
        {props.uploadimage ?      <img src={props.uploadimage} className='h-full w-full object-cover object-center ' alt="" />:
          <div className='h-full w-full'>
          <h3 className='text-center text-sm text-gray-400 mt-8' >No Image Selected</h3>
        </div>
        }
     
      </div>
      {/*enhanced image  */}

       <div className='w-60 bg-white shadow-md rounded-lg h-60 overflow-hidden '>
        <h2 className='text-sm  bg-blue-500 text-center text-white font-medium '>Enhanced Image</h2>
  {props.enhancedimage ?
  <img src={props.enhancedimage.image} className='h-full w-full object-cover object-center ' alt="" />:

        <div className='h-full w-full'>
          <h3 className='text-center text-sm text-gray-400 mt-8' >No enhanced image</h3>
        </div>
  
}
      </div>
    </div>
  )
}

export default Imagepreview
