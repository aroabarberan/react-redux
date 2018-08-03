import React from "react";
import { connect } from "react-redux";
import ListHeroes from "./ListHeroes";
import Main from "../components/Main";
import { editHero } from "../actions/heroesAction";

class App extends React.Component {
  render() {
    return (
      <div>
        <Main editHero={() => this.props.editHero(1, {id: 1, name: 'The incredible hulk', color: 'green dark', url: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png'})} />        
        <ListHeroes />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editHero: (idHero, value) => {
      dispatch(editHero(idHero, value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)