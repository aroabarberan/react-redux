import React from 'react';

import { Main } from "./Main";
import { User } from "./User";


export class App extends React.Component {
  constructor(props) {
    super(props)
  }
  changeUsername(username) {
  }

  render() {
    return (
      <div>
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username='Patatin'/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math 
  }
}