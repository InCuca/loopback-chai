import { expect } from 'chai';

export function propertyOfType(prop, type) {
  const props = this._obj.definition.properties.properties;
  expect(props).to.ownProperty(prop);
  if (typeof type === 'string') {
    expect(props[prop].name.toLowerCase()).to.equal(type.toLocaleLowerCase());
  } else {
    expect(props[prop]).to.equal(type);
  }
}
