import { givePlayerHealth, givePlayerExperience, givePlayerLevel, givePlayerMana } from '../src/main.js';

describe('health', () => {
  test('health levels 5 for player', () => {
    const player = {};
    const newPlayer = givePlayerHealth(10)(player);
    expect(newPlayer.health).toEqual(10);
  });
});

describe('experience', () => {
  test('experience starts at 0 for player', () => {
    const player = {};
    const newPlayer = givePlayerExperience(0)(player);
    expect(newPlayer.experience).toEqual(0);
  });
});
describe('level', () => {
  test('experience level at 1 for player', () => {
    const player = {};
    const newPlayer = givePlayerLevel(1)(player);
    expect(newPlayer.level).toEqual(1);
  });
});

describe('mana', () => {
  test('mana starts at 5 for player', () => {
    const player = {};
    const newPlayer = givePlayerMana(5)(player);
    expect(newPlayer.mana).toEqual(5);
  });
});