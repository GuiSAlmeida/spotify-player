/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';

import time from '../src/time';

describe('Convert to human time', () => {
  it('should receive 0ms and convert to 0:00', () => {
    expect(time(0)).to.be.eql('0:00');
  });

  it('should receive 1000ms and convert to 0:01', () => {
    expect(time(1000)).to.be.eql('0:01');
  });

  it('should receive 11000ms and convert to 0:11', () => {
    expect(time(11000)).to.be.eql('0:11');
  });

  it('should receive 60000ms and convert to 1:00', () => {
    expect(time(60000)).to.be.eql('1:00');
  });
});
