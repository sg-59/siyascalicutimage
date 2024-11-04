  import axios from 'axios'

  export const signupApi=async(data)=>{
    console.log("values..............",data);
    try{
       const datas=await axios.post("http://localhost:5000/api/signup",data)
       console.log("final answer...................",datas.data);
       return datas.data
    }catch(err){
       console.log(err.message);
    }

}