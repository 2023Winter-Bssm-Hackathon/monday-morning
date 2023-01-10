import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.scss';
import PC from '../components/PC.js';

const Home = () => {
    const [isConn, setIsConn] = useState();

    return (
        <div>
            <div className="home-wrap">
                <div className="home-title-box">
                    d
                </div>
                <Link to={'/page1'}>page1</Link> 
                <PC />
            </div>
        </div>
    );
}

export default Home;