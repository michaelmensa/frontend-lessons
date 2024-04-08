const assert = require('assert');
import { expect } from '@jest/globals';
import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

// test to check getFullYear
describe('getFullYear', () => {
    it('should return the current year', () => {
        assert.strictEqual(getFullYear(), 2024);
    });
});

// test to check getFooterCopy
describe('getFooterCopy', () => {
    it('should return correct string when arg is true', () => {
        const truthy = getFooterCopy(true);

        expect(truthy).toBe('Holberton School');
    });

    it('should return the correct string when arg is false', () => {
        const falsy = getFooterCopy(false);

        expect(falsy).toBe('Holberton School main dashboard');
    })
})

// test to check returned string for latestNotification
describe('getLatestNotification', () => {
    it('shoud check the returned string for getLatestNotification', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    })
});