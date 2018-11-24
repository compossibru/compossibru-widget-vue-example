#!/usr/bin/env node

const { spawn } = require('child_process');

const child = spawn('npx', [
    'vue-cli-service',
    'build'
]);

child.on('error', (err) => {
    throw err;
});

child.stdout.on('data', (data) => {
    process.stdout.write(data);
});

child.stderr.on('data', (data) => {
    process.stdout.write(data);
});

child.on('exit', () => {
    process.stdout.write('I\'m done!');
});
