import { expect } from 'chai';

export function haveMany(relationship) {
  expect(this._obj).to.haveOwnProperty(relationship);
  expect(this._obj[relationship]).to.be.an('object');

  const relObj = this._obj[relationship];
  expect(relObj).to.haveOwnProperty('type');
  expect(relObj.type).to.equal('hasMany');
}
