import React from 'react'
import { useState } from 'react'
import Paymentitem from './Paymentitem'
function Getdetails() {

    const [signin,setsignin]=useState({email:""})
    const [payment,setpayment]=useState([])
    const createuser1=async (key)=>{
                  
        const response = await fetch(`http://localhost:4000/api1/v1/paymenthistory`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userid:key})
        });
          const json= await response.json(); 
          console.log(json.data);
          setpayment(json.data);
         

      }
      const createuser=async ()=>{
                  
        const response = await fetch(`http://localhost:4000/api1/v1/getuserid`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:signin.email})
        });
          const json= await response.json(); 
          console.log(json.data);
          createuser1(json.data);
          console.log(payment);

      }
      const Signupdate=()=>{

         createuser();
         console.log("signin");
      }
      const  changes=(e)=>{
        setsignin({...signin,[e.target.name]:e.target.value})
     }
    

  return (
  <div>
       
       <form className='container'>
       <div class="row col-sm-5">
         <label for="inputEmail3" class="col-sm-2 col-form-label headings">email</label>
         <div class="col-sm-10">
           <input type="email" class="form-control" id="name" name="email" onChange={changes}/>
         </div>
       </div>
       <button type="button" class="btn btn-primary my-3 headings" onClick={()=>{Signupdate()}}>getdetails</button>
     </form>
     <div className='container'>
     <div className='row coloring3'>
    {payment.map((Note)=>{
      return <div className="col-md-4 my-3"><Paymentitem Notes={Note} /></div>
    })
     }
     </div>
     </div>
   
  </div>
  
  )
}

export default Getdetails