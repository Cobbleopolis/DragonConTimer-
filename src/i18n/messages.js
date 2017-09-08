import buildinfo from '../buildinfo'

export default {
    en: {
        projectName: buildinfo.displayName,
        pageNames: {
            index: 'Main Page',
            waitlist: 'Waitlist'
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