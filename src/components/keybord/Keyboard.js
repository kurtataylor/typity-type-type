import React, { useState } from 'react';
import './Keyboard.css';
import alphabet from '../../utility/constants';
import LetterButton from '../letterbutton/LetterButton';

function Keyboard(props) {
    const [lastButtonPress, setLastButtonPress] = useState("no button push yet");
    const letters = alphabet;

    return <div>
        {lastButtonPress}
        <LetterButton letter="a"></LetterButton>
    </div>
}

export default Keyboard;