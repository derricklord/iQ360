import express from 'express';
import _ from 'lodash';
import moment from 'moment';

let router = express.Router();
let _questions = [
  {
    _id:1,
    authorID: {username: 'Derrick', displayName: 'Derrick Lord', _id: 1234567890},
    question: 'What is your favorite color?',
    answers:['red','green','blue'],
    correctAnswer:2,
    createdAt: moment().format()
  },
  {
    _id:2,
    authorID: {username: 'Marga', displayName: 'Marga Genova', _id: 1234567899},
    question: 'What is your favorite color?',
    answers:['red','green','blue'],
    correctAnswer:2,
    createdAt: moment().format()
  }
];

//API V.1 Endpoint: links
router.get('/', (req, res, next)=>{
  res.json(_questions);
});

router.get('/random', (req, res, next)=>{
    var random = Math.floor(Math.random() * _questions.length);
    res.send({question: _questions[random]})
});


export default router;
