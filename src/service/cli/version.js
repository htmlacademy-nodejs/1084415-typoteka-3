'use strict';

const packageJsonFile = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
    console.info(`Версия программы: `, version);
  }
};
