const express = require('express')
const routes = express()
const paymentinfo=require('../models/yogapayment');
const { body, validationResult } = require('express-validator');

routes.post(
    '/newpayment',
    async (req, res) => {
      
      
    const  payment1=await paymentinfo.create({
        userid:req.body.userid,
        batch:req.body.batch
      })

      res.send({data:payment1});
     
    }
  );
  routes.post('/validate',async(req,res)=>{
    const errors = validationResult(req);
    const  payment=await paymentinfo.find({userid:req.body.userid});
    console.log(payment);
    if(payment.length!==0){
   console.log(payment[payment.length-1])
      var today = new Date();
      var birthDate = new Date(payment[payment.length-1].paidAt);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      var da = today.getDate() - birthDate.getDate();
      if(m==0&&age==0){
        return res.status(505).json({error:"payment already done for this month",success:false});
      }
    }
    res.send({success:true});
  });


  routes.post(
    '/paymenthistory',
    async (req, res) => {
        console.log("check");

      let history=await paymentinfo.find({userid:req.body.userid});

      res.send({data:history});
    }
  );

  module.exports=routes