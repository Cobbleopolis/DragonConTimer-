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
                label: "Socket Status: ",
                connected: "Connected",
                disconnected: "Disconnected"
            }
        }
    }
}