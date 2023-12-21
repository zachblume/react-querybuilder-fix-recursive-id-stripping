/**
 * @jest-environment node
 */
import crypto from 'node:crypto';
import { testGenerateID } from '../../genericTests/generateIDtests';

const ogCrypto = globalThis.crypto;

globalThis.crypto = crypto as Crypto;

// Delay the loading of generateID until after crypto has been defined
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateID } = require('./generateID');

// TODO: When our test runner supports ESM, we can do this instead:
// const { generateID } = await import('./generateID');

testGenerateID(generateID);

globalThis.crypto = ogCrypto;
