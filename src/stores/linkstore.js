import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../constants';
import {EventEmitter} from 'events';

let _links = [];
class LinkStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register((action)=>{
      switch(action.actionType){
        case ActionTypes.RECEIVE_LINKS:
          //Respond to RECEIVE_LINKS
          console.log('3. In Store');
          _links = action.links;
          this.emit('change');
        
        default:
          //Ignore all other ActionTypes
      }
    });
  }

  getAll(){
    return _links;
  }

}

export default new LinkStore();
