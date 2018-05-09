import createMockedModel from './create-mocked-model';

describe('createMockedModel test util', () => {
  it('throws without model name', () => {
    expect(() => createMockedModel()).toThrow();
  });
});
