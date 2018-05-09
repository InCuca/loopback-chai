import { ModelBuilder } from 'loopback-datasource-juggler';

export default function (name, schema = {}) {
  const defaultSchema = {
    name,
    properties: {},
  };
  if (name) defaultSchema.plural = `${name}s`;

  const builder = new ModelBuilder();
  const models = builder.buildModels({
    ...defaultSchema,
    ...schema,
  });
  const keys = Object.keys(models);

  return models[keys[0]];
}
