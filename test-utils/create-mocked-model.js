import { DataSource } from 'loopback-datasource-juggler';

export default function (name, schema = {}) {
  const defaultSchema = {
    name,
    properties: {},
  };
  if (name) defaultSchema.plural = `${name}s`;

  const settings = {
    ...defaultSchema,
    ...schema,
  };
  const ds = new DataSource();
  return ds.createModel(name, settings);
}
