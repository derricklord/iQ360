import express from 'express';
import _ from 'lodash';

let router = express.Router();
let _currentId = 0;
let _users = [];

//API V.1 Endpoint: links
router.get('/', (req, res, next)=>{
  res.json(_users);
});

router.post('/signup', (req, res, next)=>{
    var user = {
        username: req.body.username,
        password: req.body.password,
        id: _currentId
      }
    _users.push(user);
    _currentId++;
    res.send(user)
});


router.post('/login', (req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;
    var currentUser = null;

    _users.forEach((user)=>{
      if(user.username === username && user.password === password){
          currentUser = user;
      }
    });

    if(currentUser){
      res.status(200).send({ message: 'Login Successful' });
    }else{
      res.status(401).send({ message: 'Wrong username and/or password' });
    }


});


export default router;
