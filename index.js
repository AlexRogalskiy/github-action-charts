'use strict';

const core = require('@actions/core');
const webshot = require('webshot-node');
const path = require('path');
const config = require('./src/config');

async function createSnapshot(url, file, options) {
  console.log(`Generating file with name ${file} by ${url} with ${options}`);

  try {
    await webshot(url, file, options, err => {
      if (err) throw err;
      console.log('screenshot captured');
    });
  } catch (e) {
    console.error(e);
  }
}

function createOptions(width, height) {
  return {
    shotSize: { width, height },
    windowSize: { width, height },
  };
}

async function run() {
  const fileName = core.getInput('name') || config.name;
  const filePath = core.getInput('path') || config.path;

  const source = core.getInput('url');
  const width = core.getInput('width');
  const height = core.getInput('height');

  const url = `https://styled-charts.vercel.app/api?url=${source}&width=${width}&height=${height}`;
  const file = path.join(filePath, `${fileName}.png`);
  const options = { ...config.options, ...createOptions(width, height) };

  await createSnapshot(url, file, options);

  core.setOutput('image', 'image downloaded in root directory');
}

module.exports = run;

if (require.main === module) {
  run();
}
