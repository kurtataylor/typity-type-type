const alphabet = {
    "a": 0,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 0,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 0,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 0,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 0,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10,
}

const PossiblePresses = 3;

function getLetterValue(letter) {
    return alphabet[letter];
}

const wordLengthOptions = [3, 4, 5, 6, 7];

const countColors = {
    0: "grey",
    1: "red",
    2: "orange",
    3: "green",
};

export { alphabet, PossiblePresses, getLetterValue, countColors, wordLengthOptions}
export default alphabet;