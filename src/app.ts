import { MODULES } from './@modules/app.factory';

const SERVER = MODULES.INFRA.SERVER.HTTP.EXPRESS();

SERVER.setup();

export { SERVER };
