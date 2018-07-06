import React from 'react';
import { Link } from "react-router-dom";

const Signin = () => {
    return (
    <div>
        <h1>Signin Page</h1>
        <nav>
            <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/signup'>
                <li>Sign Up</li>
                </Link>
                <Link to='/profile'>
                <li>Profile</li>
                </Link>
            </ul>
        </nav>
    </div>
    );
}

export default Signin;