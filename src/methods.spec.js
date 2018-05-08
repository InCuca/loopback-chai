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
    expect(hasMany({ balls: undefined }, 'balls')).toThrow();
    expect(hasMany({ balls: null }, 'balls')).toThrow();
    expect(hasMany({ balls: '' }, 'balls')).toThrow();
  });

  it('do not assert haveMany if missing relationship type', () => {
    expect(hasMany({ balls: {} }, 'balls')).toThrow();
    expect(hasMany({ balls: { type: undefined } }, 'balls')).toThrow();
    expect(hasMany({ balls: { type: null } }, 'balls')).toThrow();
    expect(hasMany({ balls: { type: 'belongsTo' } }, 'balls')).toThrow();
  });
});
