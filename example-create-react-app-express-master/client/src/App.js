import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from "./components/pages/homepage";
import Signup from "./components/pages/signup";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup/:id" component={Signup} />
      </div>
    </Router>
    );
  }
}

export default App;