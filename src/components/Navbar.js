import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand text-ehite">T-Shirt designing Portal</Link>
<button typr="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"></button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                SignUP
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                SignIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar