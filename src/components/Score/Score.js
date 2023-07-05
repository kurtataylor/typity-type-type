import React, { useState } from 'react';
import './Score.css';

function Score(props, {children}) {
    

    return <div>
        <div className='info'>
            <span>{props.CurrentScore}</span>
        </div>
        {children}
    </div>
}

export default Score;