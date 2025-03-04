module.exports = {
  moduleNameMapper: {
  '\\.(css|less|scss|sass)$': '<rootDir>/src/mocks/cssMock.js'
  },
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src"]
};

