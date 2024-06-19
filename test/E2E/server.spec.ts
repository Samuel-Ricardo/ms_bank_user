import supertest from 'supertest';
import { SERVER } from '../../src/app';
import { HELLO_WORLD } from '../data/server.data';

describe('[E2E] | [SERVER]', () => {
  it('[E2E] | HEALTH CHECK => [HTTP]', async () => {
    const response = await supertest(SERVER.instance()).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(HELLO_WORLD);
  });
});
