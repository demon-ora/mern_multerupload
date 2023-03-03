import React from 'react'
import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";

const App = () => {

  const[data,setData] = useState("")

  const  handlesubmit = async (e)=>{
e.preventDefault();
console.log(data);
const formData = new FormData();
formData.append("image",data);
console.log(formData);
  const result =  await fetch("http://localhost:5000/",{
  method:'post',  
  body:formData});
  console.log(result);

  }

  return (
    <>
    <form  encType='multipart/form-data' onSubmit={handlesubmit}>
<input type="file" name='image' onChange={(e)=> setData(e.target.files[0])}/>
<button>click</button>
    </form>
    </>
  )
}

export default App