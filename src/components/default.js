import React from 'react';

export default class Default extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Default View</h1>
        {this.props.children}
      </div>
    )
  }
}
