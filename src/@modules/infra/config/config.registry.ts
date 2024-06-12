export const CONFIG_REGISTRY = {
  CONFIG: Symbol.for('MODULE::INFRA::CONFIG'),
  ENV: Symbol.for('MODULE::INFRA::CONFIG::ENV'),
  PORT: Symbol.for('MODULE::INFRA::CONFIG::PORT'),
  DATABASE: {
    URL: Symbol.for('MODULE::INFRA::CONFIG::DATABASE::URL'),
  },
};
