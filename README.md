# @miraclesoft/logger

![version](https://img.shields.io/badge/dynamic/json?color=orange&label=version&prefix=%20&query=version&suffix=%20&url=https%3A%2F%2Fraw.githubusercontent.com%2Fmiracleapps%2Flogger%2Fmaster%2Fpackage.json) ![license](https://img.shields.io/badge/dynamic/json?color=blue&label=license&query=license&url=https%3A%2F%2Fraw.githubusercontent.com%2Fmiracleapps%2Flogger%2Fmaster%2Fpackage.json)

Wintson based logger with predefined settings for prod and non-prod environments.

**_Note_**_: This is a beta version of this module created for internal use by Miracle Apps, Miracle Software Systems, Inc.'s internal app development wing. Please submit any issues (or) feedback [here](https://github.com/miracleapps/logger/issues)._

## Usage

Install the logger as a dependency.

```sh
npm install --save @miraclesoft/logger
```

You can then use the logger in your project as follows,

```js
const logger = require('@miraclesoft/logger');

logger.info('');
```

## Configuration

The logger uses environment variables for configuration.

If **NODE_ENV=production**, then logs are logged to a daily rotate log file with the log level set to **warn** and above. For all other environments, the log level is set **info** and are logged out to console.

Log files in production are named as **app-logs-date.log**. You can change this to **APP_NAME-date.log** by setting the **APP_NAME** environment variable.

By default the logger(in production) stores 14 days of logs. This can be overridden by setting the **MAX_LOG_FILES** environment variable.

## Contributors

- **Chanakya Lokam** - Director Innovation | Miracle Software Systems, Inc.

## License

© 2020 Miracle Software Systems, Inc.

Licensed under the [MIT License](LICENSE).
