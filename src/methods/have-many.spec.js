// import chai from 'chai';
// import { createMockedModel } from '../../test-utils';
// import loopbackChai from '../index';

// describe('haveMany assertion', () => {
//   const perfectRelMock = {
//     relations: {
//       balls: {
//         type: 'hasMany',
//         model: 'Ball',
//         foreignKey: 'ballId',
//       },
//     },
//   };
//   // const Square = createMockedModel('Square', perfectRelMock)

//   chai.use(loopbackChai);

//   // Wrapper for haveMany assertion
//   function hasMany(subject, ...args) {
//     return () => chai
//       .expect(subject)
//       .to
//       .haveMany(...args);
//   }

//   // Check if haveMany throws when checking attribute
//   function itThrows(name) {
//     const errMock = {
//       ...perfectRelMock,
//       ...{ balls: { ...perfectRelMock.balls } },
//     };
//     const hasManyFn = hasMany(
//       errMock,
//       'balls',
//       perfectRelMock.balls.model,
//       perfectRelMock.balls.foreignKey,
//     );

//     delete errMock.balls[name];
//     expect(hasManyFn).toThrow();

//     errMock.balls[name] = undefined;
//     expect(hasManyFn).toThrow();

//     errMock.balls[name] = null;
//     expect(hasManyFn).toThrow();

//     errMock.balls[name] = 'INVALID_VALUE';
//     expect(hasManyFn).toThrow();
//   }

//   it('throws if wrong relationship type', () => {
//     itThrows('type');
//   });

//   it('throws if wrong relationship model', () => {
//     itThrows('model');
//   });

//   it('throws if wrong relationship foreignKey', () => {
//     itThrows('foreignKey');
//   });

//   it('throws if missing relationship name', () => {
//     expect(hasMany({})).toThrow();
//     expect(hasMany({ noop: {} }, 'balls')).toThrow();
//     expect(hasMany({ balls: undefined }, 'balls')).toThrow();
//     expect(hasMany({ balls: null }, 'balls')).toThrow();
//     expect(hasMany({ balls: '' }, 'balls')).toThrow();
//   });

//   it('throws if missing arguments', () => {
//     expect(hasMany(
//       perfectRelMock,
//       'balls',
//       perfectRelMock.balls.model,
//     )).toThrow();
//     expect(hasMany(
//       perfectRelMock,
//       'balls',
//     )).toThrow();
//     expect(hasMany(perfectRelMock)).toThrow();
//     expect(hasMany()).toThrow();
//   });

//   it('assert haveMany relationship', () => {
//     const subj = perfectRelMock;
//     const { model, foreignKey } = perfectRelMock.balls;
//     expect(hasMany(subj, 'balls', model, foreignKey)).not.toThrow();
//   });
// });
import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

describe('haveMany assertion', () => {
  const PerfectModel = createMockedModel(
    'Ball',
    {
      relations: {
        balls: {
          type: 'hasMany',
          model: 'Ball',
          foreignKey: 'ballId',
        },
      },
    },
  );

  function haveMany(subject, ...args) {
    return () => chai
      .expect(subject)
      .to
      .haveMany(...args);
  }

  chai.use(loopbackChai);

  it('throws if missing arguments', () => {
    expect(haveMany(
      PerfectModel,
      'balls',
    )).toThrow();
    expect(haveMany(PerfectModel)).toThrow();
    expect(haveMany()).toThrow();
  });

  it('throws if the model does not have relationship', () => {
    const ErrModel = createMockedModel('Ball', {});
    expect(haveMany(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('throws if the model does not matching relationship', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        trees: {
          type: 'hasMany',
          model: 'Ball',
        },
      },
    });
    expect(haveMany(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('throws if the model does not have matching relationship type', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          type: 'belongsTo',
          model: 'Ball',
        },
      },
    });
    expect(haveMany(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('throws if the model does not have matching relationship model', () => {
    const ErrModel = createMockedModel('Ball', {
      relations: {
        balls: {
          type: 'hasMany',
          model: 'Tree',
        },
      },
    });
    expect(haveMany(ErrModel, 'balls', 'Ball')).toThrow();
  });

  it('pass in perfect relationship', () => {
    expect(haveMany(PerfectModel, 'balls', 'Ball')).not.toThrow();
  });
});
