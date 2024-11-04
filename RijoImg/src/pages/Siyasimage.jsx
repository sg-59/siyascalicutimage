import axios from 'axios'
import React, { useState } from 'react'
import { signupApi } from '../APi'

const Siyasimage = () => {

    const [image,setImages]=useState({})
    const [name, setName] = useState('')

    const formdata=new FormData()
    formdata.append('image',image)
    formdata.append('name',name)
    console.log("form data..................",formdata);
    

    function displayone(){
signupApi(formdata)
    }

  return (
    <div>
        <form onSubmit={displayone} encType='multipart/form-data'>
        <input type="text" placeholder='username'  onChange={(e) => setName(e.target.value)} />
        <input type="file"  filename='images' onChange={(e)=>setImages(e.target.files[0])} />
        <input type="submit" value='submit'  />
        </form>
    </div>
  )
}

export default Siyasimage