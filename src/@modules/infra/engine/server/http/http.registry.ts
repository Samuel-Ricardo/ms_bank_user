export const HTTP_SERVER_ENGINE_REGISTRY = {
  EXPRESS: {
    APP: Symbol.for('MODULE::INFRA::ENGINE::SERVER::HTTP::EXPRESS'),
    CORS: Symbol.for('MODULE::INFRA::ENGINE::SERVER::HTTP::EXPRESS::CORS'),
    PARSER: {
      BODY: Symbol.for(
        'MODULE::INFRA::ENGINE::SERVER::HTTP::EXPRESS::BODY_PARSER',
      ),
    },
  },
};
