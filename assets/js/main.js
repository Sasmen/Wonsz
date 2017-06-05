var levels = {
    easy: {
        startSpeed: 0,
        numberOfWalls: 0
    },
    medium: {
        startSpeed: 2,
        numberOfWalls: 10
    },
    hard: {
        startSpeed: 4,
        numberOfWalls: 30
    }
};

var level = levels.medium;

var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('Levels', Levels);

game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);

game.state.start('Menu');

