const playerController = require('./player.controller');

module.exports = (app, db, cors) => {
    const controller = playerController(db);

    app.route('/player/search').get(cors, controller.playerSearch);
};