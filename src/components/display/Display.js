import React, { useState } from 'react';
import './Keyboard.css';
import alphabet from '../../utility/constants';
import LetterButton from '../letterbutton/LetterButton';

function Keyboard(props) {
    const [lastButtonPress, setLastButtonPress] = useState("no button push yet");
    const letters = alphabet;

    // const keys = alphabet.map((l)=> 
    //     <LetterButton></LetterButton>
    // );

    return <div>
        {lastButtonPress}
        
    </div>
}

export default Keyboard;