'use strict';

const core = require('@actions/core');
const webshot = require('webshot');
const path = require('path');

const config = require('./src/config');
const { notBlankOrElse, createOptions, toString } = require('./src/utils');

async function createSnapshot(url, file, options) {
  console.log(
    `Generating screenshot with parameters:
    url=${url},
    name=${file},
    options=${toString(options)}\n`
  );

  try {
    await webshot(url, file, options, e => {
      if (e) throw e;
      console.log('screenshot captured');
    });
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  const url = core.getInput('url');
  const width = core.getInput('width');
  const height = core.getInput('height');

  const fileName = notBlankOrElse(core.getInput('name'), config.name);
  const filePath = notBlankOrElse(core.getInput('path'), config.path);

  const target = `https://styled-charts.vercel.app/api?url=${url}`;
  const file = path.join(filePath, `${fileName}.png`);
  const options = { ...createOptions(width, height), ...config.options };

  await createSnapshot(target, file, options);

  core.setOutput('image', 'image downloaded in root directory');
}

module.exports = run;

if (require.main === module) {
  run();
}
