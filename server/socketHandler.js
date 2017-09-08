const debug = require('debug')('dragoncontimer:socket');
const stationStore = require('./stationStore');

module.exports = (io, socket) => {
    debug("User Connected!");

    socket.emit('add_station', Array.from(stationStore.getStations()));

    socket.on('update_station_fields', (updateFieldData) => {
        stationStore.updateFields(updateFieldData);
        io.emit('update_station_fields', updateFieldData)
    });

    socket.on('disconnect', () => {
        debug("User Disconnected!")
    });
};