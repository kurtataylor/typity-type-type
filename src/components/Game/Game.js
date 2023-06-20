import React, { useState } from 'react';
import { wordLengthOptions, alphabet } from '../../utility/constants';
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
        letter.pressesLeft--;
        //find dom element and update class
        setCurrentWord(arr => [...arr, `${letter}`]);
    }
    function Backspace() {
        if(CurrentWord.length <= 0) return;
        let letterObj = alphabet.find(a => a.letter == CurrentWord[CurrentWord.length - 1]);
        letterObj.pressesLeft++;
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

    const domElements = {
        WordLengthButtons: wordLengthOptions.map(option => {
            return <button type="button" onClick={() => 
                setCurrentWordLength(parseInt(option))
            }>{option}</button>
        }),
        LetterButtons: alphabet.map(letter => {
            let letterValue = alphabet.find(a => a.letter == letter).value;
            let classes = `${letter.letter} pressesLeft-${letter.pressesLeft}`
            return <button 
                    className={buttonClassBuilder(letter)} 
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

    function buttonClassBuilder(letter) {
        let letterObj = alphabet.find(a => a.letter == letter);
        if (letterObj.pressesLeft == 3) return `${letter} pressesLeft-3`
        if (letterObj.pressesLeft == 2) return `${letter} pressesLeft-2`
        if (letterObj.pressesLeft == 1) return `${letter} pressesLeft-1`
        return `${letter} pressesLeft-0`
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
            .map(letter => alphabet.find(a => a.letter == letter).value))
            // .flat()
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
        if (alphabet.map(a => a.letter).includes(event.key)) {
            processLetterPress(event.key);
            return;
        }
    }



    return <div onKeyDown={(event) => ProcessKeypress(event)}>
        {gameState()}
    </div>;
}

export default Game;