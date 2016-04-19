import axios from 'axios';
import ServerActions from '../actions/ServerActions';

let API = {
  fetchLinks(){
    /*
    axios.get('/api/v1/links')
         .then((response)=>{
           console.log('1. In API');
           ServerActions.receiveLinks(response.data);
         });
    })
    */
    axios.post('/graphql', {
                query:`{
                  links{
                    _id,
                    title,
                    url
                  }
                }`
          }).then((response)=>{
            console.log('1. In API w/ graphql');
            ServerActions.receiveLinks(response.data.data.links);
          });
  }
}

export default API;
