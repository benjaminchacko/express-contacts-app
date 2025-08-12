const pino = require('pino');
const path = require('path');

const fileTransport = pino.transport({
    targets: [{
        level: 'info',
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: "SYS:mm-dd-yyyy HH:MM:ss",
            ignore: "pid, hostname"
        }
    },
    {
        level: 'error',
        target: "pino/file",
        options: {
            destination: path.join(`${__dirname}/../pino-error.log`),
        }
    }],
})

const logger = pino(fileTransport)

exports.logger = logger 