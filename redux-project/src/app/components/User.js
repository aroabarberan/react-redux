import React from "react";

export class User extends React.Component {
  render() {
    return (
      <div>
        <p>User name: {this.props.username}</p>
      </div>
    )
  }
}