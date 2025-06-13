import React from 'react'

const Imageupload = (props) => {
  const Imagehandler = (e) => {
    const file = e.target.files[0];
   
  props.imagefileupload(file);

    }
  
  return (
    <div>
      <div className='flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 mb-8'>
        <label className='cursor-pointer border-2  rounded-2xl border-dashed border-gray-300 py-2 px-2' htmlFor="fileinput">
          <input className='hidden' type="file" name="" id="fileinput" onChange={Imagehandler} />
          <p className='text-sm text-gray-600'>Upload or drag your image</p>
        </label>
      </div>
    </div>
  )
}

export default Imageupload
