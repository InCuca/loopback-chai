import * as properties from './properties';
import * as methods from './methods';

function addItemsOnAssertion(items, addFn) {
  Object.entries(items).forEach(entry =>
    addFn(entry[0], entry[1]));
}

export default function ({ Assertion }) {
  addItemsOnAssertion(properties, Assertion.addProperty.bind(Assertion));
  addItemsOnAssertion(methods, Assertion.addMethod.bind(Assertion));
}
