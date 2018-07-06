import React from 'react';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
    <div>
        <h1>Profile Page</h1>
        <nav>
            <ul>
                <Link to='/'>
                <li>Sign In</li>
                </Link>
                <Link to='/'>
                <li>Sign Up</li>
                </Link>
                <Link to='/'>
                <li>Home</li>
                </Link>
            </ul>
        </nav>
    </div>
    )
}

export default Profile;