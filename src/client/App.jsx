import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminUI from './pages/AdminUI.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route path="/adminpanel" component={AdminUI}/>
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;