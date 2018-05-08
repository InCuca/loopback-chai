import { expect } from 'chai';

export function haveMany(relationship, model, foreignKey) {
  expect(this._obj).to.haveOwnProperty(relationship);
  expect(this._obj[relationship]).to.be.an('object');

  const relObj = this._obj[relationship];
  expect(relObj).to.haveOwnProperty('type');
  expect(relObj.type).to.equal('hasMany');

  expect(relObj).to.haveOwnProperty('model');
  expect(relObj.model).to.not.empty;
  if (model) {
    expect(relObj.model).to.equal(model);
  }

  expect(relObj).to.haveOwnProperty('foreignKey');
  expect(relObj.foreignKey).to.not.empty;
  if (foreignKey) {
    expect(relObj.foreignKey).to.equal(foreignKey);
  }
}
