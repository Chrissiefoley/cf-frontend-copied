module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/my-app/src", "<rootDir>/test-public"],
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
};
