import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This is Home</h2>
            <span>{user?.displayName}</span>
        </div>
    );
};

export default Home;