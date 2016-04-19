import React from 'react';

export default class Test extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Test View</h1>
        {this.props.children}
      </div>
    )
  }
}
