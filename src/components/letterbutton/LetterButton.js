import React, { useState } from 'react';
import { countColors } from '../../utility/constants';
import './LetterButton.css';

function LetterButton(props) {
    var [pressesLeft, setPressLeft] = useState(3);
    var [color, setColor] = useState(countColors[pressesLeft]);

    var _processButtonPress = () => {
        setPressLeft(pressesLeft--)
    };
    return <button type="button" onClick={_processButtonPress()}>{ props.letter } dsadas</button>
}

export default LetterButton;