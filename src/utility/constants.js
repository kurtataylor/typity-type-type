const PossiblePresses = 3;

const alphabet = [
    {
        letter: "a",
        value: 0,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "b",
        value: 3,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "c",
        value: 3,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "d",
        value: 2,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "e",
        value: 0,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "f",
        value: 4,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "g",
        value: 2,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "h",
        value: 4,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "i",
        value: 0,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "j",
        value: 8,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "k",
        value: 5,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "l",
        value: 1,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "m",
        value: 3,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "n",
        value: 1,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "o",
        value: 0,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "p",
        value: 3,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "q",
        value: 10,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "r",
        value: 1,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "s",
        value: 1,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "t",
        value: 1,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "u",
        value: 0,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "v",
        value: 4,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "w",
        value: 4,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "x",
        value: 8,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "y",
        value: 4,
        pressesLeft: PossiblePresses,
    },
    {
        letter: "z",
        value: 10,
        pressesLeft: PossiblePresses,
    },
]

function getLetterValue(letter) {
    return alphabet.find(l => l.letter == letter).value;
}

const wordLengthOptions = [3, 4, 5, 6, 7];

const countColors = {
    0: "grey",
    1: "red",
    2: "orange",
    3: "green",
};

export { alphabet, getLetterValue, countColors, wordLengthOptions}
export default alphabet;