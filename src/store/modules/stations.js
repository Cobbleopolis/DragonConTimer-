const state = {
    stations: []
};

const getters = {
    stations: state => state.stations
};

const actions = {

};

const mutations = {
    SOCKET_ADD_STATION(state, payload) {
        function addStation(stationObj) {
            const existingStation = findExistingStation(state.stations, stationObj);
            if (existingStation)
                state.stations.splice(existingStation.index, 1, stationObj);
            else
                state.stations.push(stationObj);
        }

        if (Array.isArray(payload))
            payload.forEach(addStation);
        else
            addStation(payload)
    }
};

function findExistingStation(stationArr, station) {
    function compare(storedStation) {
        return storedStation.id === station.id
    }
    const stationObj = stationArr.find(compare);
    const stationIndex = stationArr.findIndex(compare);
    if (stationObj)
        return {
            station: stationObj,
            index: stationIndex
        }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}