import React from 'react';
import './Logo.css';

function Logo() {
    return <div className="logoHolder">
        <div className="logo">
            <span className="logoTextHolder">
                <span className="logoText"><span className="logoLetter">T</span>ypity</span>
                <span className="logoText"><span className="logoLetter">T</span>ype</span>
                <span className="logoText"><span className="logoLetter">T</span>ype</span>
            </span>
        </div>
    </div>
}

export default Logo;