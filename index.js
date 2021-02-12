'use strict';

const core = require('@actions/core');
const webshot = require('webshot-node');
const path = require('path');

const config = require('./src/config');
const { notBlankOrElse, createOptions, objToString } = require('./src/utils');

async function createSnapshot(url, file, options) {
  console.log(
    `Generating screenshot with parameters:
    url=${url},
    name=${file},
    options=${objToString(options)}\n`
  );

  try {
    await webshot(url, file, options, () => {
      console.log('screenshot captured');
    });
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  const name = notBlankOrElse(core.getInput('name'), config.name);
  const filePath = notBlankOrElse(core.getInput('path'), config.path);
  const fileUrl = core.getInput('url');
  const width = core.getInput('width');
  const height = core.getInput('height');

  const url = `https://styled-charts.vercel.app/api?url=${fileUrl}&width=${width}&height=${height}`;
  const file = path.join(filePath, `${name}.png`);
  const options = { ...createOptions(width, height), ...config.options };

  await createSnapshot(url, file, options);

  core.setOutput('image', 'image downloaded in root directory');
}

module.exports = run;

if (require.main === module) {
  run();
}
