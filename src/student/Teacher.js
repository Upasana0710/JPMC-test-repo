import React from 'react'
import './Teacher.css'
import styled from 'styled-components';
const Teacherspage = styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 768px){
  padding: 6px 10px;
}
`;
function Student() {
  <link href="https://fonts.googleapis.com/css2?family=Chela+One&display=swap" rel="stylesheet"></link>
  return (
    <Teacherspage>
       
       <div className='container '>
        <div className='d-flex text-center'>
        <img className="mt-3  w-10 h-10  image" src="https://th.bing.com/th?q=Student+Portrait&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247 "/>
        <h1 className="mt-5 mx-auto text-white">Hello! Welcome to the Teachers portal</h1>
        </div>
       
          <div
           className="  row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 my-5 gy-5 "
          >
           
            <div className="col ">
           
              <div className="card   card1  text-center">
               <h1 className='text-center heading'>Attendence</h1>
               
               <div className="card-body text-center">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam, voluptatum?
                  </p>
                  <button
                   className="btn btn-outline-warning "
                    
                  >
                    Show attendence
                  </button>
              </div>
              </div>
            </div>
            <div className="col">
           
           <div className="card card2  ">
            <h1 className='text-center'>Post Lectures</h1>
             <div className="card-body text-center">
               
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ipsam, voluptatum?
               </p>
               <button
                className="btn btn-outline-warning"
                
               >
                 Show attendence
               </button>
               
             </div>
           </div>
         </div>
         <div className="col">
           
           <div className="card card3 ">
            <h1 className='text-center'>Take queries</h1>
             <div className="card-body text-center">
               
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ipsam, voluptatum?
               </p>
               <button
                className="btn btn-outline-warning "
                
               >
                 Show attendence
               </button>
               
             </div>
           </div>
         </div>
         <div className="col">
           
           <div className="card card4 ">
            <h1 className='text-center'>Student Request</h1>
             <div className="card-body text-center">
               
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ipsam, voluptatum?
               </p>
               <button
                className="btn btn-outline-warning"
               
               >
                 Show attendence
               </button>
               
             </div>
           </div>
         </div>
         <div className="col">
           
           <div className="card card5 ">
            <h1 className='text-center'>Top Performer</h1>
             <div className="card-body text-center">
               
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ipsam, voluptatum?
               </p>
               <button
                className="btn btn-outline-warning"
               
               >
                 Show attendence
               </button>
               
             </div>
           </div>
         </div>
         <div className="col">
           
           <div className="card card6  ">
            <h1 className='text-center'>Talk to parents</h1>
             <div className="card-body text-center">
               
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ipsam, voluptatum?
               </p>
               <button
                className="btn btn-outline-warning"
                 
               >
                 Show attendence
               </button>
               
             </div>
           </div>
         </div>
  </div>
  </div>

         </Teacherspage>

  )
}

export default Student