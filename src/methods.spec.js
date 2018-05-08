import chai from 'chai';
import loopbackChai from './index';

describe('haveMany assertion', () => {
  chai.use(loopbackChai);

  function hasMany(obj, ...args) {
    return () => chai
      .expect(obj)
      .to
      .haveMany(...args);
  }

  it('do assert haveMany relationship', () => {
    expect(hasMany({
      balls: {
        type: 'hasMany',
        model: 'Ball',
        foreignKey: 'modelId',
      },
    }, 'balls')).not.toThrow();
  });

  it('do not assert haveMany if missing relationship name', () => {
    expect(hasMany({})).toThrow();
    expect(hasMany({ noop: {} }, 'balls')).toThrow();
  });
});
