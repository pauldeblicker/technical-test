import { buildFastify } from '../app';

export default async function () {
  const app = await buildFastify();

  await app.ready();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).app = app;
}
