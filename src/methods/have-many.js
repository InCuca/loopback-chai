import { expect } from 'chai';

export function haveMany(relationship, model, foreignKey) {
  const props = this._obj.definition.properties;

  const relObj = props.relations[relationship];
  // console.log(relObj);
  expect(relObj).to.haveOwnProperty('type');
  expect(relObj.type).to.equal('hasMany');

  expect(relObj).to.haveOwnProperty('model');
  expect(relObj.model).to.not.empty;
  expect(relObj.model).to.equal(model);

  expect(relObj).to.haveOwnProperty('foreignKey');
  expect(relObj.foreignKey).to.not.empty;
  if (foreignKey) {
    expect(relObj.foreignKey).to.equal(foreignKey);
  }
}
