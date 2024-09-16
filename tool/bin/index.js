#!/usr/bin/env node
const arg = require('arg');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean
  })
  
  if(args['--start']){
    console.log('starting the app');
  };
} catch (error) {
  console.log(error.message);
  usage();
}

function usage() {
  console.log(`tool [CMD]
    --start\tStarts the app
    --build \tBuilds the app`);
}