var Levels = {

    preload: function () {
        game.load.image('background', './assets/images/levels.png');
        game.load.image('easy', './assets/images/easy-button.png');
        game.load.image('medium', './assets/images/medium-button.png');
        game.load.image('hard', './assets/images/hard-button.png');
    },

    create: function () {
        this.add.tileSprite(0, 0, 800, 600, 'background');
        this.add.button(108, 271, 'easy', this.startEasy, this);
        this.add.button(236, 271, 'medium', this.startMedium, this);
        this.add.button(367, 271, 'hard', this.startHard, this);
    },

    startEasy: function () {
        level = levels.easy;
        this.state.start('Game');
    },
    startMedium: function () {
        level = levels.medium;
        this.state.start('Game');
    },
    startHard: function () {
        level = levels.hard;
        this.state.start('Game');
    }
};
