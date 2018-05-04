import loopback from 'loopback';
import * as properties from './properties';
import * as methods from './methods';

function addProperties(Assertion) {
  properties.forEach(
    property =>
      Assertion.addProperty(property.name, property)
  )
}

function addMethods(Assertion) {
  methods.forEach(
    method =>
      Assertion.addProperty(method.name, method)
  )
}

export default function(chai, utils) {
  const Assertion = chai.Assertion;

  addProperties(Assertion);
  addMethods(Assertion);
}
