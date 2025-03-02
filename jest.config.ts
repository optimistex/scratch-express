import { pathsToModuleNameMapper } from 'ts-jest';
import { Config } from '@jest/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig');

process.env.TZ = 'UTC';

const jestConfig: Config.InitialOptions = {
  clearMocks: true,
  setupFilesAfterEnv: [
    'jest-extended/all',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
  moduleNameMapper: compilerOptions.paths ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/..' }) : undefined,
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  preset: 'ts-jest',
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/**/**.ts',
    '!<rootDir>/**/index.ts',
  ],
};

export default jestConfig;
