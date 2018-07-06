import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Profile from "./components/pages/Profile";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
    );
  }
}

export default App;
