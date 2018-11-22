#!/usr/bin/env node

const spawn = require('child_process').spawn
const join = require('path').join
const params = process.argv.slice(2)

const app = spawn('npm', ['start', '--'].concat(params), { 
  stdio: 'inherit',
  cwd: join(__dirname) 
}).on('exit', (i, m) => process.exit())
