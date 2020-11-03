const { expect } = require('@jest/globals');
const diff = require('./subtractingNums');

test('test1', () => {
    expect(diff(10, 8)).toBe(2);
});

test('test2', () => {
    expect(diff(5, 5)).toBe(0);
});

test('test2', () => {
    expect(diff(-5, 3)).toBe(-8);
});