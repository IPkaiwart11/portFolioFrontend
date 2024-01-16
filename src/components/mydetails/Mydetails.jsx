import React from 'react'
import './mydetails.scss'
export default function Mydetails() {
  return (
    <>
       <div className='mydetail_container'>
            <div className="child">
               <h1>Who's this guy?</h1>
               {/* <img src="../../../public/images/ip_image1.jpg"
               style={{width:'100%'}} alt="img " /> */}
               <div className="detailcontainer1">
                <div style={{textAlign:'center'}}>
                <img src="/images/ip_image1.jpg"
               alt="img " />
                </div>
                <div className="details_container">
                    <h2>"Passionate MERN stack developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js, dedicated to crafting efficient and scalable web applications."</h2>
                   <ul className='experience'>
                    <li>"Hands-on experience developing robust and high-performance RESTful APIs using Express.js, ensuring seamless communication between the front-end and back-end."</li>
                    <li>"Successfully implemented responsive and user-friendly interfaces with React.js, utilizing state management libraries such as Redux for optimal data flow within applications."</li>
                    <li>"Built and maintained scalable databases using MongoDB, ensuring data integrity and efficiency in handling large datasets."</li>
                    <li>"Extensive experience in server-side scripting with Node.js, developing custom APIs and server-side logic to enhance the overall functionality and performance of web applications."</li>
                   </ul>
                   </div>
               </div>
               </div>   
              
      </div>
    </>
  )
}
