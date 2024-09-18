#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/command/start');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean
  });

  if(args['--start']){
    const config = getConfig();
    start(config);
    } // else if (hasJSConfigFile()) {
    // return loadJSConfigFile(); }
} catch (error) {
  console.log(chalk.yellow(error.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
}