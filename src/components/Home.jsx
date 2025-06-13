import React, { useState } from 'react'
import Imagepreview from './Imagepreview'
import Imageupload from './Imageupload'
import { enhancedImageApi } from './enhancedimageapi'
import axios from 'axios'

const Home = () => {
  const [imageupload, setimageupload] = useState(null)
  const [imageenhanced, setimageenhanced] = useState(null)
  const [loading, setloading] = useState(false)

  const imagefileupload = async (file) => {
    console.log(file)
    setimageupload(URL.createObjectURL(file))
    setloading(true)
    const enhancedimage = await enhancedImageApi(file)
    setimageenhanced(enhancedimage)
    setloading(false)
    console.log("Enhanced Image:", enhancedimage.image)
    
  }
  return (
    <div>
  
      <Imageupload imagefileupload={imagefileupload}/>
      <Imagepreview uploadimage= {imageupload} enhancedimage = {imageenhanced} loading={loading} />
    </div>
  )
}

export default Home
