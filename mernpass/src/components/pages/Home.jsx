import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1>Home Page</h1>
        <nav>
            <ul>
                <Link to='/signin'>
                <li>Sign In</li>
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

export default Home;