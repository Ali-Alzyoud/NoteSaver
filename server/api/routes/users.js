const express = require('express');
const router = express();
const bcrypt = require('bcrypt');
const User = require('../../models/user');

const USER_STATE = {
  VERIFIED : 'verified',
  REGISTERED : 'registerd',
  ANONYMOUS : 'anonymous',
}

function authenticate(req, res, next) {
  if( req.session.email && req.session.verified){
    next();
  }
  else{
    res.status(403).json({message: 'unauthorized user created'});
  }
}

router.post("/register", async (req, res, next)=>{
  try{
    const email = req.body.email;
    const password = req.body.password;
    const hashedPw = await bcrypt.hash(password, 12);
    const emailFounded = await User.findOne({email});
    if(emailFounded)
    {
      return res.status(404).json({message : 'user already registered'});
    }
    const user = await User.create({email, hashedPw, veryfied: false})
    await user.save();
    return res.status(200).json({message: 'user created'});
  }
  catch(ex){
    return res.status(404).json({message : 'error occurred'});
  }
});

router.post("/login", async (req, res, next)=>{
  try{
    const email = req.body.email || req.query.email;
    const password = req.body.password || req.query.password;
    const user = await User.findOne({email},{email:1, hashedPw: 1, verified: 1});
    const matchstatus = user && await bcrypt.compare(password, user.hashedPw);
    if(matchstatus == true){
      req.session.email = email;
      req.session.verified = user.verified;
      return res.status(200).json({message :'user logged in'});
    }
    else{
      return res.status(404).json({error :'Wrong Email or Password'});
    }
  }
  catch(ex){
    return res.status(404).json({error :'unknown error'});;
  }
});

router.post("/logout", (req, res, next)=>{
  req.session.destroy(()=>{
    console.log('user logged out');
  })
  res.sendStatus(200);
});


router.get("/state", (req, res, next)=>{
  if( req.session.email && req.session.verified){
    res.status(200).json({state: USER_STATE.VERIFIED});
  }
  else if( req.session.email){
    res.status(200).json({state: USER_STATE.REGISTERED});
  }
  else{
    res.status(200).json({state: USER_STATE.ANONYMOUS});
  }
});

router.get("/notes", authenticate, async (req, res, next)=>{
  const email = req.session.email;
  const user = await User.findOne({email},{notes: 1});
  res.status(200).json(user.notes);
});

module.exports = router;