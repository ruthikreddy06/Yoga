import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Register(props) {
 const histroy=useNavigate()
    const [signin,setsignin]=useState({email:"",dob:"",name:""})
    const createuser=async ()=>{
                  
        const response = await fetch(`http://localhost:4000/api1/v1/`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:signin.email,dob:signin.dob,name:signin.name})
        });
        const j=await response.json();
        console.log(j);
        if(j.success===false){
              props.showAlert(j.error,"danger")
        }
        else{
          props.showAlert("successfully register","success")
          gotopayment();
        }

      }
      const Signupdate=()=>{
         createuser();
         console.log("signin");
      }
      const  changes=(e)=>{
        setsignin({...signin,[e.target.name]:e.target.value})
     }
     const gotopayment=()=>{
      histroy('/payment')
     }
    

  return (
  <div>
       
       <form className='container'>
       <div class="row col-sm-5">
         <label for="inputEmail3" class="col-sm-2 col-form-label headings">Name</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="name" name="name" onChange={changes}/>
         </div>
       </div>
       <div class="row col-sm-5 my-3">
         <label for="inputEmail3" class="col-sm-2 col-form-label headings">Email</label>
         <div class="col-sm-10">
           <input type="email" class="form-control" id="inputEmail3" name="email" onChange={changes}/>
         </div>
       </div>
       <div class="row col-sm-5 my-3">
         <label for="inputPassword3" class="col-sm-2 col-form-label headings">DOB</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="inputPassword3" name="dob" onChange={changes}/>
         </div>
       </div>
       <button type="button" class="btn btn-primary my-3 headings" onClick={()=>{Signupdate()}}>Register</button>
       <button type="button" class="btn btn-primary my-3 headings" onClick={()=>{gotopayment()}}>already a user</button>
     </form>
     </div>
  
  )
}

export default Register