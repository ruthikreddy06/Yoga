const express = require('express')
const routes = express()
const userinfo=require('../models/yogauser');

const { body, validationResult } = require('express-validator');

routes.post(
    '/',[body('email').isEmail()],
    async (req, res) => {

        const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array(),success:false});
      }
     let user=await userinfo.findOne({email:req.body.email});
     if(user){
        return res.status(504).json({error:"user with this email already exists please go to payments page",success:false});
     }

      console.log(req.body)
      var today = new Date();
      var birthDate = new Date(req.body.dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      var da = today.getDate() - birthDate.getDate();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if(m<0){
        m +=12;
      }
      if(da<0){
        da +=30;
      }
      if (age <= 18 || age>=65) {
        return res.status(504).json({error:"age limit",success:false});
      }
    
    


      user=await userinfo.create({
        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob
      })

      res.send({data:user,success:true});
    }
  );

  routes.post(
    '/getuserid',[body('email').isEmail()],
    async (req, res) => {

        const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array(),success:false});
      }
     let user=await userinfo.findOne({email:req.body.email});
     if(!user){
        return res.status(404).json({error:"user with this email doenot exist",success:false});
     }

      res.send({data:user.id,success:true});
    }
  );

  module.exports=routes