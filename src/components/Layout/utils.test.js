import { isScrollEnd } from './utils';

describe('Utils Layout', () => {
  it('should isScrollEnd return false', () => {
    const element = {
      scrollHeight: 900,
      scrollTop: 50,
      clientHeight: 500,
    };
    expect(isScrollEnd(element)).toBe(false);
  });

  it('should isScrollEnd return true', () => {
    const element = {
      scrollHeight: 900,
      scrollTop: 400,
      clientHeight: 500,
    };
    expect(isScrollEnd(element)).toBe(true);
  });
});
