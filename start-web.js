"use strict";
const startWeb = {
    startPage: function() {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="game.css"/>
            <title>Guessing Game</title>
        </head>
        <body>
            <div class="start">
                <div class = "div1">
                </div>
                <div class = "div2">
                    <div class="heading">
                        <h1>WELCOME!</h1>
                        <h1>GUESS-THE-SECRET-WORD GAME</h1>
                    </div>
                    <div class="start-game">
                        <form action="/start" method="POST">
                        <input class="player-name" name="playername" value="" placeholder="Enter player name"/>
                        <button class="button" type="submit">START GAME</button>
                        </form>
                    </div>
                </div>
                <div class = "div3">
                </div>
            </div>
        </body>
        </html>
        `;
      }
};
   module.exports = startWeb;