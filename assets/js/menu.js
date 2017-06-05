let click;

let Menu = {
    preload: function () {
        game.load.image('background', './assets/images/menu.png');
        game.load.image('startGameButton', './assets/images/start-game-button.png');
        game.load.audio('click', './assets/sounds/click.wav');
    },

    create: function () {
        click = game.add.audio('click');
        this.add.tileSprite(0, 0, 600, 450, 'background');
        this.add.button(196, 271, 'startGameButton', this.selectLevel, this);
    },

    selectLevel: function () {
        click.play();
        this.state.start('Levels');
    }
};
