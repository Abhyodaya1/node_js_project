const {format, createLogger, transports} = require('winston');
const {combine, timestamp, label, printf} = format;

const customformat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    format:combine(
        timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
        customformat
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'combined.log'})
    ]
})

module.exports = logger;