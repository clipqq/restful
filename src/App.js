import React from 'react'
import Homepage from './homepage'
import About from './about'
import Navbar from './navbar'
import Contact from './contact'
import SuccessStories from './success-stories'
import Pricing from './pricing'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

console.log(process.env.REACT_APP_MAILCHIMP_API_KEY)

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />

                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/method">
                            <Pricing />
                        </Route>

                        <Route path="/success-stories">
                            <SuccessStories />
                        </Route>
                    </Switch>
                </Router>

                <Contact />
            </div>
        )
    }
}

export default App
