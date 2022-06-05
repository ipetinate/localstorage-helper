/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["jest-localstorage-mock"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src",
  },
};
