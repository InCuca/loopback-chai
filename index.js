import loopback from 'loopback';
import * as properties from './properties';
import * as methods from './methods';

function addProperties(Assertion) {
  Object.entries(properties).forEach(
    entry =>
      Assertion.addProperty(entry[0], entry[1])
  )
}

function addMethods(Assertion) {
  Object.entries(methods).forEach(
    entry =>
      Assertion.addMethod(entry[0], entry[1])
  )
}

export default function(chai, utils) {
  const Assertion = chai.Assertion;

  addProperties(Assertion);
  addMethods(Assertion);
}
