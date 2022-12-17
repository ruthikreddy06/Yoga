import React from 'react'

function Paymentitem(props) {
  return (
    <div className="card" style={{width:"18rem"}}>
      <div className="card-body ">
     
      <h5 className="card-title headings">{props.Notes.id}</h5>
 <p className="card-text texts">{props.Notes.userid}</p>
 <p className="card-text texts">{props.Notes.batch}</p>
 <p className="card-text texts">{props.Notes.paidAt}</p>

        
    </div>
    
        </div>
  )
}

export default Paymentitem