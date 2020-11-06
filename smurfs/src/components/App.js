import React from "react";
import "./App.css";

import SmurfForm from './smurfForm'
import SmurfsList from './smurfsList'

 const App = () => {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfsList />
      </div>
    );
}


export default App;
