const debug = require('debug')('dragoncontimer:socket');
const stationStore = require('./stationStore');

module.exports = socket => {
    debug("User Connected!");

    socket.emit('add_station', Array.from(stationStore.getStations()));

    socket.on('disconnect', () => {
        debug("User Disconnected!")
    });
};