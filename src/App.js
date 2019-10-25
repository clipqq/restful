import React from 'react'
import Homepage from './homepage'
import About from './about'
import Navbar from './navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router >

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

        </Router>

      </div>
    );
  }
}

export default App;
