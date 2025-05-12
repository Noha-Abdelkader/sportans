export function iterableArray(n: number) {
  return Array.from({ length: n }, (_, i) => i + 1);
}