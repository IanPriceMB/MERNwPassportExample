import React, { Component } from 'react';

class Signup extends Component {

  render() {
    return (
      <div>
        {this.props.match.params.id}
        hello you are here
        <a href='http://localhost:5000/auth/signout'>
      <button> 
      press me
      </button>
    </a>
      </div>
    );
  }
}

export default Signup;
