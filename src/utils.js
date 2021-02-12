'use strict';

const createOptions = (width, height) => {
  return {
    shotSize: { width: width, height: height },
    windowSize: { width: width, height: height },
  };
};

const isNonEmptyString = str => {
  return str && str.length > 0;
};

const isBlankString = str => {
  return !str || /^\s*$/.test(str);
};

const notBlankOrElse = (str, defaultValue) => {
  return isBlankString(str) ? defaultValue : str;
};

const objToString = obj => {
  let str = '(';
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += p + ' => ' + (typeof obj[p] === 'object' ? '[' + objToString(obj[p]) + ']' : obj[p] + ',');
    }
  }
  return str + ')';
};

module.exports = {
  createOptions,
  objToString,
  isNonEmptyString,
  isBlankString,
  notBlankOrElse,
};
