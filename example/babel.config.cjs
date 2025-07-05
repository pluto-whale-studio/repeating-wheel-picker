/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const pkg = require("../package.json");
const { getConfig } = require("react-native-builder-bob/babel-config");

const root = path.resolve(__dirname, "..");

module.exports = function(api) {
  api.cache(true);

  return getConfig(
    {
      presets: ["babel-preset-expo"],
    },
    { root, pkg }
  );
};