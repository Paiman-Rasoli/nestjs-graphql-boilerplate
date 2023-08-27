/**
 * @returns random 10-digit integer ID between 1000000000 and 4294967295.
 */
export function generateIntegerId(): number {
  const MIN_ID = 1000000000;
  const MAX_ID = 4294967295;
  return MIN_ID + Math.floor(Math.random() * (MAX_ID - MIN_ID - 1));
}
