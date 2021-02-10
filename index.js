'use strict';

const core = require("@actions/core");
const webshot = require('webshot-node');
const config = require('./src/config');

async function snap(url, file, options) {
  try {
    await webshot(url, file, options, function () {
      console.log("screenshot captured")
    });
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  const name = core.getInput("name") || config.name;
  const source = core.getInput("url");
  const width = core.getInput("width");
  const height = core.getInput("height");

  const sourceOptions = {
    shotSize: { width, height },
    windowSize: { width, height }
  };

  const options = { ...config.options, ...sourceOptions };

  const url = `https://styled-charts.vercel.app/api?url=${source}&width=${width}&height=${height}`;
  await snap(url, name + ".png", options);

  console.log('Done!');
  core.setOutput("image", "image downloaded in root directory");
}

module.exports = run;

if (require.main === module) {
  run();
}
