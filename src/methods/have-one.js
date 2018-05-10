import { expect } from 'chai';

export function haveOne(relationship, model, foreignKey) {
  expect(this._obj).to.have.relationship(relationship, model);

  const props = this._obj.definition.properties;
  const relObj = props.relations[relationship];
  expect(relObj).to.haveOwnProperty('type');
  expect(relObj.type).to.equal('hasOne');

  expect(relObj).to.haveOwnProperty('foreignKey');
  expect(relObj.foreignKey).to.not.empty;
  if (foreignKey) {
    expect(relObj.foreignKey).to.equal(foreignKey);
  }
}
