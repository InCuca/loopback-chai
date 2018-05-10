import createMockedModel from './create-mocked-model';

describe('createMockedModel test util', () => {
  it('throws without model name', () => {
    expect(() => createMockedModel()).toThrow();
  });

  it('creates an Model', () => {
    const stub = {};
    const Foo = createMockedModel('Foo', stub);
    expect(Foo.definition.name).toEqual('Foo');
  });

  it('creates an Model with relationship', () => {
    const mock = {
      relations: {
        balls: {
          type: 'hasMany',
          model: 'Ball',
          foreignKey: 'ballId',
        },
      },
    };
    const Foo = createMockedModel('Foo', mock);
    expect(Foo.definition.rawProperties.relations).toEqual(mock.relations);
  });
});
