import React from "react";

export const Main = (props) => {

  return (
    <div>
      <button onClick={() => props.changeUsername('Pepito')}>Change Name</button>
    </div>
  )

}