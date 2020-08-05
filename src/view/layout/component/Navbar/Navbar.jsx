import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light mb-3">
                    <Link class="navbar-brand mb-0 h1" to="/">Instagram Crawler</Link>
                    {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}
                </nav>
            </div>
        );
    }
}

export default Navbar;