import React from 'react';

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Main View</h1>
        {this.props.children}
      </div>
    )
  }
}
