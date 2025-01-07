export default async function () {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (global as any).app.close();
}
