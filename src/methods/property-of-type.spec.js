// import chai from 'chai';
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
