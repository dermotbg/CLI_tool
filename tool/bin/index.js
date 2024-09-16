#!/usr/bin/env node
// const arg = require('arg');
// const chalk = require('chalk');

import chalk from "chalk";
import arg from "arg";
import { packageUpSync } from 'package-up';


try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean
  });
  
  if(args['--start']){
    const pkgPath = packageUpSync({ cwd: process.cwd() });
    const pkg = require(pkgPath);
    if (pkg.tool){
      console.log('Found Configuration', pkg.tool)
    } else {
      console.log(chalk.yellow("Could not find configuration, using default"));
    }

    console.log(chalk.bgCyanBright('starting the app'));
  };
} catch (error) {
  console.log(chalk.yellow(error.message));
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
}