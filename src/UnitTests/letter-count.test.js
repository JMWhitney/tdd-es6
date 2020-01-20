import { getLetterCount } from './letter-count';
import { expect } from 'chai';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  })

  it('return the correct letter count for a word with only one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected)
  })

  it('return the correct letter count for words with multiple occurances of a single letter', () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount('mississippi');
    expect(actual).to.deep.equal(expected);
  })

  it('return the correct letter count regardless of capitalization', () => {
    const expected = { m:1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount('mIsSiSsIpPi');
    expect(actual).to.deep.equal(expected);
  })

  it('return the correct letter count for strings with non-alphanumeric characters', () => {
    const expected = { v: 1, o: 2, i: 1, c: 1, e: 1, s: 1, r: 1, a: 1, n: 2, t: 1 }
    const actual = getLetterCount('voices rant on');
    expect(actual).to.deep.equal(expected);
  })
})