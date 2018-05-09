import * as methods from '.';

describe('methods', () => {
  it('export haveMany', () => {
    expect(methods).toHaveProperty('haveMany');
  });
});
