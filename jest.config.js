module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
};
