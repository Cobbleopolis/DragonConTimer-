const config = require('config');
const Station = require('./api/Station');

let stations = new Map();

function init() {
    config.get('stations').map(stationObj =>
        new Station(
            stationObj.id,
            stationObj.name,
            stationObj.status,
            stationObj.consoleOptions,
            stationObj.currentConsole,
            stationObj.currentGame
        )
    ).forEach(station => {stations.set(station.id, station)})
}

function getStations() {
    return stations.values();
}

module.exports = {
    init,
    getStations
};