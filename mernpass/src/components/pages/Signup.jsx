import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
    <div>
        <h1>Signup Page</h1>
        <nav>
            <ul>
                <Link to='/signin'>
                <li>Sign In</li>
                </Link>
                <Link to='/profile'>
                <li>Profile</li>
                </Link>
                <Link to='/'>
                <li>Home</li>
                </Link>
            </ul>
        </nav>
    </div>
    );
}

export default Signup;