module.exports = {
  roots: ['./frontend/src'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['./jest.setup.js'],
};
