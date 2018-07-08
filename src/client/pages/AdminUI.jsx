import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavSide from '../components/AdminUI/Navbar/NavSide.jsx';
import AdminUIDashboard from '../components/AdminUI/AdminUIDashboard.jsx';

class AdminUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            Home: true,
        }
    }

    render() {
        return (
            <div id="AdminUI">
                    <React.Fragment>
                        <NavSide />
                        <Switch>
                            <Route exact path="/adminpanel/" component={AdminUIDashboard} />
                        </Switch>
                    </React.Fragment>
            </div>
        );
    }
}

export default AdminUI;