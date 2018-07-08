import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class NavItems extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to={'/adminpanel/'}>
                    <div className="navItem">
                        Dashboard
                    </div>
                </Link>
                <Link to={'/adminpanel/Soon'}>
                    <div className="navItem">
                        Soon
                    </div>
                </Link>
                <Link to={'/adminpanel/Soon'}>
                    <div className="navItem">
                        Soon
                    </div>
                </Link>
                <Link to={'/adminpanel/Soon'}>
                    <div className="navItem">
                        Soon
                    </div>
                </Link>
                <Link to={'/adminpanel/Soon'}>
                    <div className="navItem">
                        Soon
                    </div>
                </Link>
            </React.Fragment>
        );
    }
}

export default NavItems;