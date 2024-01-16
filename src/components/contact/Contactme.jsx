import React, { useState } from 'react'
import './contactme.scss'
import axios from 'axios';
export default function Contactme() {
  const [formData,setFormData] = useState({
    fullname:'',
    email:'',
    country:''
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
   e.preventDefault();
   try{
    const res = await axios.post('/user',formData);
    console.log('Server response:',res.data);
   }catch(error){
    console.error('Erroe',error.message);
   }

  }
  return (
    <>
    <div className='cotactme-container'>
       <div className="contact-box">
  <div className="contact-box-inner">
    <div className="contact-box-front">
      <h2>Contact Me</h2>
    </div>
    
    <div className="contact-box-back">
    <form onSubmit={handleSubmit}>
        <div className="field">
        <label htmlFor="name">Enter Your Full Name:</label>
               <input type="text" onChange={handleChange} htmlFor='name' name='fullname' placeholder='Ex- Mukesh kaiwart' />
        </div>
        <div className="field">
        <label htmlFor="email">Email:</label>
              <input type="email" htmlFor='email' onChange={handleChange} name='email' placeholder='abc@gmail.com'/>
              
        <div className="field">
        <label htmlFor="Country">Country</label>
       
       <select name="country" onChange={handleChange} id="country" value={formData.country}>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
       </select>
        </div>
        <div className='field'>
        <input type="submit" placeholder='submit'/>
        </div>
        </div>
               
        

        </form>
    </div>
    
  </div>
</div>
</div>


    </>
  )
}
