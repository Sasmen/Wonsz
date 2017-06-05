var Game_Over = {

    preload: function () {
        game.load.image('gameover', './assets/images/gameover.png');
        game.load.audio('gameOver', './assets/sounds/gameOver.wav');

    },

    create: function () {
        var gameOverSound = game.add.audio('gameOver');
        gameOverSound.play();

        this.add.button(0, 0, 'gameover', this.startGame, this);

        game.add.text(235, 270, "TWÓJ WYNIK:", {font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(350, 268, score.toString(), {font: "bold 20px sans-serif", fill: "#fff", align: "center"});
    },

    startGame: function () {
        this.state.start('Menu');

    }

};

