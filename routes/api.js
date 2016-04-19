import express from 'express';

let router = express.Router();
let _links = [
  {_id:1, title:'React.js Main Website', url:'https://facebook.github.io/react/'},
  {_id:2, title:'Relay.js Main Website', url:'https://facebook.github.io/relay/'}
];

//API V.1 Endpoint: links
router.get('/', (req, res, next)=>{
  res.json(_links);
});


export default router;
