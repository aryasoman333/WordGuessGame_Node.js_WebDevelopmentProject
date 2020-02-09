"use strict";
const wordsArray = ["TEA", "EAT", "TEE", "PEA", "PET", "APE"];
let turnCounter = 0;
let randomWord = "";
const previousGuess = {};

function calculateRandomWord()
{
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    console.log("The secret word is: "+randomWord);
    for(let i in wordsArray)
        {
            wordsArray[i] = wordsArray[i].toUpperCase();
        }
}

function getTurnCounter()
{
    return turnCounter;
}

function removePreviousGuesses()
{
    Object.keys(previousGuess).forEach(function(key) { delete previousGuess[key]; });
}
 
function compareWords(guessedWord)
{
    let match = 0;
    guessedWord = guessedWord.toUpperCase();
    if(wordsArray.indexOf(guessedWord) === -1)
    {
        const alertMessage = "Invalid word! Please guess again!";
        return alertMessage;
    }
    else
    {
        turnCounter = turnCounter + 1;
        randomWord = randomWord.toUpperCase();
        if(randomWord === guessedWord)
        {
            const alertMessage = " Congratulations! You have WON THE GAME in "+turnCounter+" turns!! GUESS A NEW WORD!";
            turnCounter = 0;
            removePreviousGuesses();
            calculateRandomWord();
            return alertMessage;
        }
        let randomWordArray = randomWord.split('') ;
        let guessedWordArray = guessedWord.split('');
        for(let guessLetter of guessedWordArray)
        {
            for(let randomLetter of randomWordArray)
            {
                if(guessLetter === randomLetter)
                {
                    match = match + 1;
                    randomWordArray.splice(randomWordArray.indexOf(randomLetter),1);
                    break;
                }                        
            }
        }
        previousGuess[guessedWord]= match;
        const alertMessage = match+" matches! Please guess again!";
        return alertMessage;
    }
}

const words = {
    wordsArray,
    calculateRandomWord,
    compareWords,
    turnCounter,
    previousGuess,
    getTurnCounter,
    removePreviousGuesses
    };
  
  module.exports = words;
    