import React, { useState } from 'react';
import { wordLengthOptions, alphabet } from '../../utility/constants';
import './Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { threeLetterWords, fourLetterWords, fiveLetterWords, sixLetterWords, sevenLetterWords } from '../../ScrabbleWordList';
import Logo from '../Logo/Logo.js';

function Game() {
    var [CurrentScore, setScore] = useState(0);

    var [CurrentWordLength, setCurrentWordLength] = useState(0);
    function gameState() {
        if (CurrentWordLength === 0) 
        return <div className="menu">
            <Logo></Logo>
            <div className="menuButtonHolder">
                {domElements.WordLengthButtons}
            </div>
        </div>
        return <div className="gameBoard">
            <div className="answers">{domElements.CurrentAnswersDisplay}</div>
            <div className="playspace">
                <div className="input">{CurrentWord.join("")}</div>
                <div className="keyboard">
                    {domElements.LetterButtons}
                    <button className="submit" type="button" onClick={SubmitWord}><FontAwesomeIcon icon={faArrowTurnDown} rotation={90} /></button>
                    <button className="backspace" type="button" onClick={Backspace}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                </div>
            </div>
            <div className="score">
                <div>{CurrentWordLength} letter words</div>
                <div>Score {CalculateScore(CurrentAnswers)}</div>
            </div>

            <div className="resetHolder"><button className="reset" type="button" onClick={ResetGame}>Reset</button></div>
        </div>
    }

    var [CurrentWord, setCurrentWord] = useState([]);
    function processLetterPress(letter){
        if(CurrentWord.length >= CurrentWordLength) return; //add feedback for letter length met
        if(alphabet[letter] !== 0 && eval(`PressesLeft${letter.toUpperCase()}`) === 0) return;
        PressesLeftAdjustor(letter, false)
        //find dom element and update class
        setCurrentWord(arr => [...arr, `${letter}`]);
    }
    function Backspace() {
        if(CurrentWord.length <= 0) return;
        let letter = CurrentWord[CurrentWord.length - 1];        
        PressesLeftAdjustor(letter, true);
        //find dom element and update classupdate class
        setCurrentWord((arr) => arr.slice(0, -1));
    }
    function resetCurrentWord() {
        setCurrentWord([]);
    }

    var [CurrentAnswers, setAnswers] = useState([]);
    function addWordToCurrentAnswers(word) {
        setAnswers( arr => [...arr, `${word}`]);
    }

    function ResetGame() {
        resetCurrentWord();
        setCurrentWordLength(0);
        setScore(0);
        setAnswers([]);
        setPRessesLeftA(3);
        setPRessesLeftB(3);
        setPRessesLeftC(3);
        setPRessesLeftD(3);
        setPRessesLeftE(3);
        setPRessesLeftF(3);
        setPRessesLeftG(3);
        setPRessesLeftH(3);
        setPRessesLeftI(3);
        setPRessesLeftJ(3);
        setPRessesLeftK(3);
        setPRessesLeftL(3);
        setPRessesLeftM(3);
        setPRessesLeftN(3);
        setPRessesLeftO(3);
        setPRessesLeftP(3);
        setPRessesLeftQ(3);
        setPRessesLeftR(3);
        setPRessesLeftS(3);
        setPRessesLeftT(3);
        setPRessesLeftU(3);
        setPRessesLeftV(3);
        setPRessesLeftW(3);
        setPRessesLeftX(3);
        setPRessesLeftY(3);
        setPRessesLeftZ(3);
    }

    var [PressesLeftA, setPRessesLeftA] = useState(3);
    var [PressesLeftB, setPRessesLeftB] = useState(3);
    var [PressesLeftC, setPRessesLeftC] = useState(3);
    var [PressesLeftD, setPRessesLeftD] = useState(3);
    var [PressesLeftE, setPRessesLeftE] = useState(3);
    var [PressesLeftF, setPRessesLeftF] = useState(3);
    var [PressesLeftG, setPRessesLeftG] = useState(3);
    var [PressesLeftH, setPRessesLeftH] = useState(3);
    var [PressesLeftI, setPRessesLeftI] = useState(3);
    var [PressesLeftJ, setPRessesLeftJ] = useState(3);
    var [PressesLeftK, setPRessesLeftK] = useState(3);
    var [PressesLeftL, setPRessesLeftL] = useState(3);
    var [PressesLeftM, setPRessesLeftM] = useState(3);
    var [PressesLeftN, setPRessesLeftN] = useState(3);
    var [PressesLeftO, setPRessesLeftO] = useState(3);
    var [PressesLeftP, setPRessesLeftP] = useState(3);
    var [PressesLeftQ, setPRessesLeftQ] = useState(3);
    var [PressesLeftR, setPRessesLeftR] = useState(3);
    var [PressesLeftT, setPRessesLeftT] = useState(3);
    var [PressesLeftS, setPRessesLeftS] = useState(3);
    var [PressesLeftU, setPRessesLeftU] = useState(3);
    var [PressesLeftV, setPRessesLeftV] = useState(3);
    var [PressesLeftW, setPRessesLeftW] = useState(3);
    var [PressesLeftX, setPRessesLeftX] = useState(3);
    var [PressesLeftY, setPRessesLeftY] = useState(3);
    var [PressesLeftZ, setPRessesLeftZ] = useState(3);
    function PressesLeftAdjustor(letter, areWeIncrementing) {
        if(letter === "a") setPRessesLeftA(areWeIncrementing ? PressesLeftA + 1 : PressesLeftA - 1)
        if(letter === "b") setPRessesLeftB(areWeIncrementing ? PressesLeftB + 1 : PressesLeftB - 1)
        if(letter === "c") setPRessesLeftC(areWeIncrementing ? PressesLeftC + 1 : PressesLeftC - 1)
        if(letter === "d") setPRessesLeftD(areWeIncrementing ? PressesLeftD + 1 : PressesLeftD - 1)
        if(letter === "e") setPRessesLeftE(areWeIncrementing ? PressesLeftE + 1 : PressesLeftE - 1)
        if(letter === "f") setPRessesLeftF(areWeIncrementing ? PressesLeftF + 1 : PressesLeftF - 1)
        if(letter === "g") setPRessesLeftG(areWeIncrementing ? PressesLeftG + 1 : PressesLeftG - 1)
        if(letter === "h") setPRessesLeftH(areWeIncrementing ? PressesLeftH + 1 : PressesLeftH - 1)
        if(letter === "i") setPRessesLeftI(areWeIncrementing ? PressesLeftI + 1 : PressesLeftI - 1)
        if(letter === "j") setPRessesLeftJ(areWeIncrementing ? PressesLeftJ + 1 : PressesLeftJ - 1)
        if(letter === "k") setPRessesLeftK(areWeIncrementing ? PressesLeftK + 1 : PressesLeftK - 1)
        if(letter === "l") setPRessesLeftL(areWeIncrementing ? PressesLeftL + 1 : PressesLeftL - 1)
        if(letter === "m") setPRessesLeftM(areWeIncrementing ? PressesLeftM + 1 : PressesLeftM - 1)
        if(letter === "n") setPRessesLeftN(areWeIncrementing ? PressesLeftN + 1 : PressesLeftN - 1)
        if(letter === "o") setPRessesLeftO(areWeIncrementing ? PressesLeftO + 1 : PressesLeftO - 1)
        if(letter === "p") setPRessesLeftP(areWeIncrementing ? PressesLeftP + 1 : PressesLeftP - 1)
        if(letter === "q") setPRessesLeftQ(areWeIncrementing ? PressesLeftQ + 1 : PressesLeftQ - 1)
        if(letter === "r") setPRessesLeftR(areWeIncrementing ? PressesLeftR + 1 : PressesLeftR - 1)
        if(letter === "s") setPRessesLeftS(areWeIncrementing ? PressesLeftS + 1 : PressesLeftS - 1)
        if(letter === "t") setPRessesLeftT(areWeIncrementing ? PressesLeftT + 1 : PressesLeftT - 1)
        if(letter === "u") setPRessesLeftU(areWeIncrementing ? PressesLeftU + 1 : PressesLeftU - 1)
        if(letter === "v") setPRessesLeftV(areWeIncrementing ? PressesLeftV + 1 : PressesLeftV - 1)
        if(letter === "w") setPRessesLeftW(areWeIncrementing ? PressesLeftW + 1 : PressesLeftW - 1)
        if(letter === "x") setPRessesLeftX(areWeIncrementing ? PressesLeftX + 1 : PressesLeftX - 1)
        if(letter === "y") setPRessesLeftY(areWeIncrementing ? PressesLeftY + 1 : PressesLeftY - 1)
        if(letter === "z") setPRessesLeftZ(areWeIncrementing ? PressesLeftZ + 1 : PressesLeftZ - 1)
    }

    const domElements = {
        WordLengthButtons: wordLengthOptions.map(option => {
            return <button className="menuButton" type="button" onClick={() => 
                setCurrentWordLength(parseInt(option))
            }><span>{option}</span></button>
        }),
        LetterButtons: Object.keys(alphabet).map(letter => {
            let letterValue = alphabet[letter];
            let pressesLeft = eval(`PressesLeft${letter.toUpperCase()}`);
            let animationToggle = false;
            return <button 
                    className={`${letterValue === 0 ? `vowel`: ``} ${animationToggle ? `press`:``} ${letter} pressesLeft-${pressesLeft}`} 
                    type="button" onClick={() => {
                    animationToggle = true;
                    processLetterPress(letter)
                    }}
                    onAnimationEnd={() => animationToggle = false}>
                    <div className="keyLetter">{letter}</div>
                    <div className="keyValue">{letterValue}</div>
                </button>
        }),
        CurrentAnswersDisplay: CurrentAnswers.map(answer => {
            return <div>{answer}</div>
        })
    }

    function SubmitWord() {
        let word = CurrentWord.join("");
        if (CurrentAnswers !== undefined 
            && ( CurrentWordList().includes(word) 
            && !CurrentAnswers.includes(word))) {
            // Need different effects for invalid word and word already used
            addWordToCurrentAnswers(word);
            resetCurrentWord();
        }
    }

    function CalculateScore() {
        if (CurrentAnswers.length < 1) return;
        return CurrentAnswers.map(answer => answer.split("")
        .map(letter => alphabet[letter]))
        .flat()
        .reduce((x, y) => { return x + y; });
    }

    function CurrentWordList(){
        if (CurrentWordLength === 3) return threeLetterWords;
        if (CurrentWordLength === 4) return fourLetterWords;
        if (CurrentWordLength === 5) return fiveLetterWords;
        if (CurrentWordLength === 6) return sixLetterWords;
        if (CurrentWordLength === 7) return sevenLetterWords;
        return  null;
    }

    function ProcessKeypress(event) {
        event.preventDefault();
        if (event.key === "Backspace") {
            Backspace();
            return;
        }
        if (event.key === "Enter") {
            SubmitWord();
            return;
        }
        if (Object.keys(alphabet).includes(event.key)) {
            processLetterPress(event.key);
            return;
        }
    }



    return <div onKeyDown={(event) => ProcessKeypress(event)}>
        {gameState()}
    </div>;
}

export default Game;