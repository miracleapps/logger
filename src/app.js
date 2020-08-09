const winston = require('winston');
require('winston-daily-rotate-file');
const { format } = require('logform');

// Get file name for the log files
const filename = process.env.APP_NAME || 'app-logs';

const loggerFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(
    (info) =>
      `${info.timestamp.replace('T', ' ').replace('Z', ' ')} ${info.level}: ${
        info.message
      }`
  )
);

const transports = [];

if (process.env.NODE_ENV !== 'production') {
  const consoleTransport = new winston.transports.Console({
    level: 'info',
  });

  // Add console logger transport for non-prod environments
  transports.push(consoleTransport);
} else {
  const fileTransport = new winston.transports.DailyRotateFile({
    level: 'warn',
    filename: `./logs/${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: process.env.MAX_LOG_FILES || '14d',
  });

  // Add file logger transport to the transports array
  transports.push(fileTransport);
}

// Create standard logger
const logger = winston.createLogger({
  format: loggerFormat,
  transports,
});

module.exports = logger;
