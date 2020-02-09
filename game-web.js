"use strict";
const gameWeb = {
    gamePage: function(words, alertMessage,turnCounter) {
      return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="game.css"/>
          <title>Guessing Game</title>
        </head>
        <body>
          <div id="guess-game-app">
            ${gameWeb.getWordList(words)}
            ${gameWeb.getGuessedWord(alertMessage,turnCounter)}
            ${gameWeb.getAcceptedGuesses(words)}
           </div>
        </body>
      </html>
    `;
    },
    getWordList: function(words) {
        return `
        <ul class="valid-words">
        <h1>WORD LIST</h1>` +
        words.wordsArray.map( wordsArray => `
        <li>
          <div class="word-list">
            <span class="words">${wordsArray}</span>
          </div>
        </li>
        `).join('') +
        `</ul>`;
      },

      getGuessedWord: function(alertMessage,turnCounter) {
        return `
        <div class="guess-input-panel">
            <div>
            <span class="words">${alertMessage}</span> 
            </div>
            <div class="guess-input">
                <form action="/guess" method="POST">
                <input class="user-guess" name= "userguess" value="" placeholder="Enter a guess"/>
                <button id ="Button" type="submit">SUBMIT</button>
                </form>
            </div>
            <div>
                <span class = "words">Number of accepted guesses </span>
                <span class="turns-taken"> ${turnCounter}</span>
            </div>
        </div>
        `;
      },
      getAcceptedGuesses: function(words) {
        return `
        <div class="valid-guesses">
           
            <ul class="guessedword-list">
                <h2>PREVIOUS GUESSES</h2>
                ` +
                Object.keys(words.previousGuess).map( previousGuessKey => `
                <li>
                    <div class="guessedword">
                        <span class="words">${previousGuessKey}</span>
                    </div>
                </li>
                `).join('') +
                `
            </ul>

            <ul class="matching-letters">
                <h2>MATCHING LETTERS</h2>
                ` +
                Object.values(words.previousGuess).map( previousGuessVal => `
                <li>
                    <div class="count">
                        <span class="words">${previousGuessVal}</span>
                    </div>
                </li>
                `).join('') +
           ` </ul>
        </div>`;
      }
      
    };
    module.exports = gameWeb;