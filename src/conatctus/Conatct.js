import React from 'react'
import './Contact.css'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact() {
    let {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div>
         <div className='d-flex'>
          <div >
          <img className="image11"src="https://th.bing.com/th/id/OIP.uhGVKtWtMhmch8oRPcEk-wHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
          </div>
          
            <div className='form'>
                 
            <form  >
              <h1 className='contact'>Contact US</h1>
              <div className='fm'>
             
                <input type="text"  className="form-control mb-5" placeholder='First Name' {...register("firstName")}/>
          
           
              <input type="text"  className="form-control mb-5"  placeholder='Last Name' {...register("lastName")}/>
            
          
              <input type="date" className="form-control mb-5"   placeholder='dob'{...register("dateOfBirth")}/> 
              <input type="mail" className="form-control mb-5"  placeholder='Mail'{...register("Mail")}/> 
              <textarea className="form-control mb-5" rows="5" placeholder="Message us"></textarea>
  
              <button type="submit" className="btn btn-primary ">Contact Us</button>
              </div>
              </form>
          </div>
          </div>  
          </div>
          
 
      
      
    
   
   

  )
}

export default Contact