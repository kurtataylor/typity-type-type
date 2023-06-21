import React, { useState } from 'react';
import { wordLengthOptions, alphabet, PossiblePresses } from '../../utility/constants';
import './Game.css';
import { threeLetterWords, fourLetterWords, fiveLetterWords, sixLetterWords, sevenLetterWords } from '../../utility/words';

function Game() {
    var [CurrentScore, setScore] = useState(0);

    var [CurrentWordLength, setCurrentWordLength] = useState(0);
    function gameState() {
        if (CurrentWordLength === 0) return <div>
            {domElements.WordLengthButtons}
        </div>
        return <div className="gameBoard">
            <div className="answers">{domElements.CurrentAnswersDisplay}</div>
            <div className="playspace">
                <div className="input">{CurrentWord.join("")}</div>
                <div className="keyboard">
                    {domElements.LetterButtons}
                    <button className="submit" type="button" onClick={SubmitWord}>Submit</button>
                    <button className="backspace" type="button" onClick={Backspace}>Backspace</button>
                </div>
            </div>
            <div className="score">{CurrentScore}</div>
        </div>
    }

    var [CurrentWord, setCurrentWord] = useState([]);
    function processLetterPress(letter){
        if(CurrentWord.length >= CurrentWordLength) return; //add feedback for letter length met
        PressesLeftAdjustor(letter, true)
        //find dom element and update class
        setCurrentWord(arr => [...arr, `${letter}`]);
    }
    function Backspace() {
        if(CurrentWord.length <= 0) return;
        let letter = CurrentWord[CurrentWord.length - 1];        
        PressesLeftAdjustor(letter, false);
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
    var [PressesLeftT, setPRessesLeftS] = useState(3);
    var [PressesLeftS, setPRessesLeftT] = useState(3);
    var [PressesLeftU, setPRessesLeftU] = useState(3);
    var [PressesLeftV, setPRessesLeftV] = useState(3);
    var [PressesLeftW, setPRessesLeftW] = useState(3);
    var [PressesLeftX, setPRessesLeftX] = useState(3);
    var [PressesLeftY, setPRessesLeftY] = useState(3);
    var [PressesLeftZ, setPRessesLeftZ] = useState(3);
    function PressesLeftAdjustor(letter, areWeIncrementing) {
        if(letter == "a") setPRessesLeftA(areWeIncrementing ? PressesLeftA++ : PressesLeftA--)
        if(letter == "b") setPRessesLeftB(areWeIncrementing ? PressesLeftB++ : PressesLeftB--)
        if(letter == "c") setPRessesLeftC(areWeIncrementing ? PressesLeftC++ : PressesLeftC--)
        if(letter == "d") setPRessesLeftD(areWeIncrementing ? PressesLeftD++ : PressesLeftD--)
        if(letter == "e") setPRessesLeftE(areWeIncrementing ? PressesLeftE++ : PressesLeftE--)
        if(letter == "f") setPRessesLeftF(areWeIncrementing ? PressesLeftF++ : PressesLeftF--)
        if(letter == "g") setPRessesLeftG(areWeIncrementing ? PressesLeftG++ : PressesLeftG--)
        if(letter == "h") setPRessesLeftH(areWeIncrementing ? PressesLeftH++ : PressesLeftH--)
        if(letter == "i") setPRessesLeftI(areWeIncrementing ? PressesLeftI++ : PressesLeftI--)
        if(letter == "j") setPRessesLeftJ(areWeIncrementing ? PressesLeftJ++ : PressesLeftJ--)
        if(letter == "k") setPRessesLeftK(areWeIncrementing ? PressesLeftK++ : PressesLeftK--)
        if(letter == "l") setPRessesLeftL(areWeIncrementing ? PressesLeftL++ : PressesLeftL--)
        if(letter == "m") setPRessesLeftM(areWeIncrementing ? PressesLeftM++ : PressesLeftM--)
        if(letter == "n") setPRessesLeftN(areWeIncrementing ? PressesLeftN++ : PressesLeftN--)
        if(letter == "o") setPRessesLeftO(areWeIncrementing ? PressesLeftO++ : PressesLeftO--)
        if(letter == "p") setPRessesLeftP(areWeIncrementing ? PressesLeftP++ : PressesLeftP--)
        if(letter == "q") setPRessesLeftQ(areWeIncrementing ? PressesLeftQ++ : PressesLeftQ--)
        if(letter == "r") setPRessesLeftR(areWeIncrementing ? PressesLeftR++ : PressesLeftR--)
        if(letter == "s") setPRessesLeftS(areWeIncrementing ? PressesLeftS++ : PressesLeftS--)
        if(letter == "t") setPRessesLeftT(areWeIncrementing ? PressesLeftT++ : PressesLeftT--)
        if(letter == "u") setPRessesLeftU(areWeIncrementing ? PressesLeftU++ : PressesLeftU--)
        if(letter == "v") setPRessesLeftV(areWeIncrementing ? PressesLeftV++ : PressesLeftV--)
        if(letter == "w") setPRessesLeftW(areWeIncrementing ? PressesLeftW++ : PressesLeftW--)
        if(letter == "x") setPRessesLeftX(areWeIncrementing ? PressesLeftX++ : PressesLeftX--)
        if(letter == "y") setPRessesLeftY(areWeIncrementing ? PressesLeftY++ : PressesLeftY--)
        if(letter == "z") setPRessesLeftZ(areWeIncrementing ? PressesLeftZ++ : PressesLeftZ--)
    }

    const domElements = {
        WordLengthButtons: wordLengthOptions.map(option => {
            return <button type="button" onClick={() => 
                setCurrentWordLength(parseInt(option))
            }>{option}</button>
        }),
        LetterButtons: Object.keys(alphabet).map(letter => {
            let letterValue = alphabet[letter];
            let pressesLeft = eval(`PressesLeft${letter.toUpperCase()}`);
            return <button 
                    className={`pressesLeft-${pressesLeft}`} 
                    type="button" onClick={() => {
                    processLetterPress(letter)
                    }}>
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
            CalculateCurrentScore();
        }
    }

    function CalculateCurrentScore() {
        if (CurrentAnswers.length === 0) return;
        var points = CurrentAnswers.map(answer => answer.split("")
            .map(letter => alphabet[letter]))
            .flat()
            .reduce((x, y) => { return x + y; });
        setScore(points);
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
        console.log(event.key);
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