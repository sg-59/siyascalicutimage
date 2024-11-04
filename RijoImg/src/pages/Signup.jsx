import React, { useState } from 'react'
import './signup.css'
import { signupApi } from '../APi'
const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image,setImage]=useState({})
const [result,setResult]=useState([])
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('password',password)
    formdata.append('image',image)



   async function display(e){
    e.preventDefault();
    console.log("form data",formdata);
        signupApi(formdata).then((data)=>{
setResult(data)
        })
    }

    console.log("final answer",result);

    return (
        <div className='main'>
            <h1>Signup page</h1>
            <form onSubmit={display} encType='multipart/form-data'>
            <div><input type="text" placeholder='username'  onChange={(e) => setName(e.target.value)} /></div>
            <div><input type="file" filename='images' onChange={(e)=>setImage(e.target.files[0])} /></div>
            <div><input type='submit' value='Submit'/></div>
            </form>
       
     <img src={`${result.image}`} alt="Image" />
       
       
        </div>
    )
}

export default Signup