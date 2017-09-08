import buildinfo from '../buildinfo'

export default {
    en: {
        projectName: buildinfo.displayName,
        pageNames: {
            index: 'Main Page',
            waitlist: 'Waitlist'
        },
        forms: {
            actions: {
                submit: "Submit",
                reset: "Reset",
                cancel: "Cancel"
            }
        },
        socket: {
            status: {
                label: 'Socket Status:',
                connected: 'Connected',
                disconnected: 'Disconnected'
            }
        },
        stations: {
            actions: {
                title: 'Actions',
                setFields: 'Set Fields'
            },
            setFields: {
                title: 'Set Fields: {stationName}',
                playerName: {
                    label: 'Player Name',
                    placeholder: 'Enter Player Name',
                    description: 'The name of the person playing'
                },
                currentConsole: {
                    label: 'Current Console',
                    description: 'The console currently being played'
                },
                currentGame: {
                    label: 'Current Game',
                    placeholder: 'Enter Game',
                    description: 'The game currently being played'
                }
            }
        }
    }
}