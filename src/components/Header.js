import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.scss';

const Header = () => {
    return (
        <div>
            <div className="header-wrap">
                <ul>
                    <li><Link to={'/'} style={{textDecoration:'none'}}><img src='../images/logo.png' alt='' /></Link></li>
                    <li><Link to={'/page1'} style={{textDecoration:'none'}}>기록</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;