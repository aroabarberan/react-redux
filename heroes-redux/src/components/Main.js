import React from "react";

function Main(props) {
  return (
    <div>
      <button onClick={() => props.editHero()}>Edit Hero</button>
      {/* <button onClick={() => props.changeUsername('Pepito')}>Select hero</button> */}
    </div>
  )

}

export default Main