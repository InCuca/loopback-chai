import createMockedModel from './create-mocked-model';

describe('createMockedModel test util', () => {
  it('throws without model name', () => {
    expect(() => createMockedModel()).toThrow();
  });

  it('creates an ModelClass', () => {
    const stub = {};
    const Foo = createMockedModel('Foo', stub);
    expect(Foo.prototype).toEqual(stub);
    expect(Foo.definition.name).toEqual('Foo');
  });
});
