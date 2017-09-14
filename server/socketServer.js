const debug = require('debug')('dragoncontimer:socket');
const stationStore = require('./stationStore');

let io;

module.exports = (server) => {

    io = require('socket.io')(server);

    io.on('connection', socket => {
        debug("User Connected!");

        socket.emit('add_station', Array.from(stationStore.getStations()));

        socket.on('update_station_fields', (updateFieldData) => {
            stationStore.updateFields(updateFieldData);
            io.emit('update_station_fields', updateFieldData)
        });

        socket.on('disconnect', () => {
            debug("User Disconnected!")
        });
    });
};
