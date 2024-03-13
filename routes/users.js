var express = require('express');
var router = express.Router();
var {UserModel}=require('../Schema/user'); 

 var nodemailer = require('nodemailer');
/* GET users listing. */ 






router.post('/post',  async function(req, res) {  
  try{ 
    const user= await UserModel.create({name:req.body.name,email:req.body.email, 
        phone:req.body.phone,message:req.body.message})
   
  
  if(user){   
   
  await UserModel.findById({_id:user._id})
  
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jaison.eee@gmail.com',
      pass: 'reza efot pcee pkjh'
    }
  });
  
  var mailOptions = {
    from: 'jaison.eee@gmail.com', 
    
    to: 'jaison.eee@gmail.com', 
    subject: 'Sending Email using Node.js user message',
    text: `${user._id}/${user.name} / ${user.email}/${user.message}/${user.phone}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent : ' + info.response); 
      res.status(200).send({message:"sucess"})
    }
  });
   
  } else{  
    res.status(404).send({error:'user email not found'})

  }


  } catch(error){ 
    res.status(500).send({error:'internal server error'})
  }
});  





module.exports = router;
