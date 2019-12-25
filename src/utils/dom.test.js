
import { isMobile } from './dom';

describe('Utils dom.js', () => {
  it('isMobile should be true', () => {
    window.innerWidth = 425;
    expect(isMobile()).toBe(true);
  });

  it('isMobile should be false', () => {
    window.innerWidth = 600;
    expect(isMobile()).toBe(false);
  });
});



