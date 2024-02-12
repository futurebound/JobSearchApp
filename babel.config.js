module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // blocking build after expo 50.0+, comment out to build
    // plugins: ["expo-router/babel"],
  };
};
