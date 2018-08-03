import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'

function ListHeroes(props) {
  return (
    <div>
      <h1>MY HEROES!!!!</h1>
      <div>
        {props.heroes.heroes.map(hero => (
          <Hero key={hero.id} hero={hero} />
          
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps)(ListHeroes)