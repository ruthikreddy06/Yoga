import React from 'react'
import { useState } from 'react'
function Payment(props) {

    const [signin,setsignin]=useState({email:"",Batch:""})
    const createuser2=async (key)=>{
                  
        const response = await fetch(`http://localhost:4000/api1/v1/newpayment`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userid:key,batch:signin.Batch})
        });
          const json= await response.json(); 
          console.log(json);
          props.showAlert("payment is successfully done","success");

      }
      const createuser1=async (key)=>{
                  
        const response = await fetch(`http://localhost:4000/api1/v1/validate`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userid:key})
        });
          const json= await response.json(); 
          console.log(json);
          if(json.success===true){
               createuser2(key);

                        }
                        else{
                          props.showAlert(json.error,"danger")
                        }

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
         <label for="inputEmail3" class="col-sm-2 col-form-label headings">Batch</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="name" name="Batch" onChange={changes}/>
         </div>
       </div>
       <div class="row col-sm-5">
         <label for="inputEmail3" class="col-sm-2 col-form-label headings">email</label>
         <div class="col-sm-10">
           <input type="email" class="form-control" id="name" name="email" onChange={changes}/>
         </div>
       </div>
       <button type="button" class="btn btn-primary my-3 headings" onClick={()=>{Signupdate()}}>Register</button>
     </form>
     </div>
  
  )
}

export default Payment