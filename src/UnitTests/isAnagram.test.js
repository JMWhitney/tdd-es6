import { isAnagram } from './isAnagram';
import { expect } from 'chai';

describe('isAnagram - basic functionality', () => {
  it('return true for words with the same letter counts', () => {
    const string1 = 'listen';
    const string2 = 'silent';
    const result = isAnagram(string1, string2);
    expect(result).to.equal(true);
  })

  it('return false for words with differing letter counts', () => {
    const string1 = 'listens';
    const string2 = 'silent';
    const result = isAnagram(string1, string2);
    expect(result).to.equal(false);
  })

  it('is case insensitive', () => {
    const string1 = 'STATE';
    const string2 = 'taste';
    const result = isAnagram(string1, string2);
    expect(result).to.equal(true);
  })

  it('is whitespace insensitive', () => {
    const string1 = 'conversation';
    const string2 = 'voices rant on';
    const result = isAnagram(string1, string2);
    expect(result).to.equal(true);
  })
})
