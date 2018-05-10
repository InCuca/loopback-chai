import chai from 'chai';
import { createMockedModel } from '../../test-utils';
import loopbackChai from '../index';

// import loopbackChai from '../index';

// describe('propertyOfType assertion', () => {
// const perfecMock = {
//   properties: {
//     foo: {
//       type: 'string',
//     },
//   },
// };

// chai.use(loopbackChai);

// function propertyOfType(subject, ...args) {
//   return () => chai
//     .expect(subject)
//     .to
//     .propertyOfType(...args);
// }

// it('throws if missing property name', () => {
//   const subj = {
//     properties: { foo: { type: 'INVALID' } },
//   };

//   expect(propertyOfType(subj)).toThrow();
// });

// it('throws if wrong type', () => {
//   const subj = {
//     properties: { foo: { type: 'INVALID' } },
//   };
//   expect(propertyOfType(subj, 'foo')).toThrow();
// });
// });

describe('propertyOfType assertion', () => {
  function propertyOfType(settings, ...args) {
    return () => {
      chai.expect(createMockedModel(
        'MockedModel',
        settings,
      ))
        .to.be.a.propertyOfType(...args);
    };
  }

  chai.use(loopbackChai);

  it('throws if property is of wrong type', () => {
    expect(propertyOfType({
      properties: {
        foo: Object,
      },
    }, 'foo', String)).toThrow();
  });

  it('throws if property is missing', () => {
    expect(propertyOfType({
      properties: {
        foo: Object,
      },
    }, 'bar', Object)).toThrow();
  });

  it('throws if missing prop type', () => {
    expect(propertyOfType({
      properties: {
        foo: Object,
      },
    }, 'bar')).toThrow();
  });

  it('throws if missing prop name', () => {
    expect(propertyOfType({
      properties: {
        foo: Object,
      },
    })).toThrow();
  });

  it('pass with perfect property', () => {
    expect(propertyOfType({
      properties: {
        foo: Object,
      },
    }, 'foo', Object)).not.toThrow();
  });

  it('pass when type argument is a string', () => {
    expect(propertyOfType({
      properties: {
        foo: Object,
      },
    }, 'foo', 'Object')).not.toThrow();
  });
});
