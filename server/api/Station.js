const StationStatus = require('./StationStatus');

module.exports = class Station {

    constructor(id, name, status, consoleOptions, currentConsole, currentGame) {
        this.id = id;
        this.name = name;
        this.status = status || StationStatus.DEFAULT;
        this.consoleOptions = consoleOptions || [];
        this.currentConsole = currentConsole || '';
        this.currentGame = currentGame || '';
    }

};