import { ModelBuilder } from 'loopback-datasource-juggler';

export default function (name) {
  const builder = new ModelBuilder();
  return builder.buildModels({ name });
}
