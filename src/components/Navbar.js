import React, {Component} from 'react';

class Navbar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-expand-lg  fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Apna Cart</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;
