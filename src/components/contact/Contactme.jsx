import React, { useState } from 'react'
import './contactme.scss'
import axios from 'axios';
export default function Contactme() {
  const [formData,setFormData] = useState({
    fullname:'',
    email:'',
    country:'',
    message:''
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
    const res = await axios.post('https://portfoliobackend-kunp.onrender.com/api/user',formData,{
       withCredentials: true,
    });
    setFormData({ fullname:'',
    email:'',
    country:'',
    message:'' });
    console.log('Server response:',res.data);
    alert('successful! Thank you for your connection');
   }catch(error){
    console.error('Erroe',error);
    alert('Oops! Something went wrong. Please try again later.'); // Show a generic error message to the user
   }

  }
  return (
    <div className='wholecontainer'>
  
    <div className='cotactme-container'>
    <div className='header'>
        <h1>Get in touch with me via social media or email.</h1>
        <h3>I'm open to collaboration and new opportunities.</h3>
      </div>
       <div className="contact-box">
  {/* <div className="contact-box-inner"> */}
      <div className="welcom">
     <h3> “Thank you for visiting my portfolio! If you have any questions, opportunities, or just want to connect, feel free to reach out to me. I'm always excited to engage with fellow professionals, potential clients, or anyone interested in my work..”</h3>
      </div>
    
    <div className="contact-box-back">
      
    <form onSubmit={handleSubmit}>
        <div className="field">
        <label htmlFor="name">Enter Your Full Name:</label>
               <input type="text" onChange={handleChange} htmlFor='name' name='fullname' placeholder='Ex- Mukesh kaiwart' required/>
        </div>
        <div className="field">
        <label htmlFor="email">Email:</label>
              <input type="email" htmlFor='email' onChange={handleChange} name='email' placeholder='abc@gmail.com' required/>
              </div>
        <div className="field">
        <label htmlFor="Country">Country</label>
       
       <select name="country" onChange={handleChange}  value={formData.country} required>
       <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
       </select>
        </div>
        <div className='field'>
        <textarea name="message" onChange={handleChange} id="" rows="6" required></textarea>
        </div>
        <div className='field'>
        <input type="submit" placeholder='submit'/>
        </div>
        
               
        

        </form>
    </div>
    
  </div>
</div>
{/* </div> */}


    </div>
  )
}
