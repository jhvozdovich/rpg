import { giveHealth, giveExperience, giveLevel, giveMana } from '../src/main.js';

// COMMENT OUT LINE 3 OF MAIN JS - BOOTSTRAP IMPORT FAILS TEST 

describe('health', () => {
  test('health levels 5 for player', () => {
    const player = {};
    const newPlayer = giveHealth(10)(player);
    expect(newPlayer.health).toEqual(10);
  });
});

describe('experience', () => {
  test('experience starts at 0 for player', () => {
    const player = {};
    const newPlayer = giveExperience(0)(player);
    expect(newPlayer.experience).toEqual(0);
  });
});
describe('level', () => {
  test('experience level at 1 for player', () => {
    const player = {};
    const newPlayer = giveLevel(1)(player);
    expect(newPlayer.level).toEqual(1);
  });
});

describe('mana', () => {
  test('mana starts at 5 for player', () => {
    const player = {};
    const newPlayer = giveMana(5)(player);
    expect(newPlayer.mana).toEqual(5);
  });
});