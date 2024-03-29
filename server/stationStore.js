const config = require('config');
const Station = require('./api/Station');

let stations = new Map();

function init() {
    config.get('stations').map(stationObj =>
        new Station(
            stationObj.id,
            stationObj.stationName,
            stationObj.status,
            stationObj.consoleOptions,
            stationObj.playerName,
            stationObj.currentConsole,
            stationObj.currentGame
        )
    ).forEach(station => {stations.set(station.id, station)})
}

function getStations() {
    return stations.values();
}

function updateFields(updateFieldData) {
    if (updateFieldData) {
        let station = stations.get(updateFieldData.id);
        if (station) {
            station.playerName = updateFieldData.playerName;
            station.currentConsole = updateFieldData.currentConsole;
            station.currentGame = updateFieldData.currentGame;
            stations.set(station.id, station);
        }
    }
}

module.exports = {
    init,
    getStations,
    updateFields
};