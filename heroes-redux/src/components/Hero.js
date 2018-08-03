import React from 'react'


export default class Hero extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.hero.name} </li>
        <li> {this.props.hero.color}</li>
        <img src={this.props.hero.url} alt="" style={{ with: 100, height: 100 }} />
      </ul>
    )
  }
}
