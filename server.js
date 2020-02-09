"use strict";
const express = require('express');
const app = express();
const PORT = 3000;

const words = require('./words');
const gameWeb = require('./game-web');
const startWeb = require('./start-web');


app.use(express.static('./public'));

app.get('/', (req, res) => {
    if(req.query.playername === undefined)
        res.send(startWeb.startPage());
    else
        res.send(gameWeb.gamePage(words,"",0));
});

app.post('/start', express.urlencoded({ extended: false }), (req, res) => {
    words.calculateRandomWord();
    res.redirect('/?playername=' +req.body.playername);
    });

app.post('/guess', express.urlencoded({ extended: false }), (req, res) => {
    const alertMessage = words.compareWords(req.body.userguess);
    const turnCounter = words.getTurnCounter();
    res.send(gameWeb.gamePage(words,alertMessage,turnCounter));
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
