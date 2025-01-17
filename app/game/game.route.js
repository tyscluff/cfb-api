module.exports = (app, db, middlewares, Sentry, patreonMiddlewares) => {
    const controller = require('./game.controller')(db, Sentry);

    app.route('/games').get(middlewares, controller.getGames);
    app.route('/games/teams').get(middlewares, controller.getTeamStats);
    app.route('/drives').get(middlewares, controller.getDrives);
    app.route('/games/players').get(middlewares, controller.getPlayerStats);
    app.route('/records').get(middlewares, controller.getRecords);
    app.route('/games/media').get(middlewares, controller.getMedia);
    app.route('/calendar').get(middlewares, controller.getCalendar);
    app.route('/games/weather').get(patreonMiddlewares, controller.getWeather);
    app.route('/scoreboard').get(patreonMiddlewares, controller.getScoreboard);
    app.route('/player/stats').get(middlewares, controller.getPlayerStatsByWeek);
}