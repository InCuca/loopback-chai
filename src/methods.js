import { expect } from 'chai';

export function haveMany(relationship) {
  expect(this._obj).to.haveOwnProperty(relationship);
}
