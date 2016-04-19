import React from 'react';
import API from '../helpers/api';
import LinkStore from '../stores/linkstore';

let _getAppState = () =>{
  return {links: LinkStore.getAll()};
}

export default class Links extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    console.log('4. In the View (Event Response)');
    this.setState(_getAppState());
  }


  componentDidMount(){
    API.fetchLinks(); //Helper Call - Intiate Action
    LinkStore.on('change', this.onChange);
  }

  render(){
    let content = this.state.links.map((link)=>{
      return <li key={link._id}><a href={link.url}>{link.title}</a></li>;
    });

    return (
      <div>
        <h3>Links</h3>
        <ul>
          {content}
        </ul>
      </div>
    )
  }
}
