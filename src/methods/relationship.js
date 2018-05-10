import { expect } from 'chai';

export function relationship(name, model) {
  const props = this._obj.definition.properties;
  expect(props.relations).to.haveOwnProperty(name);

  const relObj = props.relations[name];

  expect(relObj).to.haveOwnProperty('model');
  expect(relObj.model).to.not.empty;
  expect(relObj.model).to.equal(model);
}
