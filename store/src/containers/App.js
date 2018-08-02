import React, { Component } from 'react';
import Head from "../components/Head";
import List from "./List";
import Form from "../components/Form";

class App extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <Head />
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
