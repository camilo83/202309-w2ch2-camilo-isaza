export function strictEquals(a, b) {
  if (Object.is(a, b)) {
    return true;
  }

  return false;
}
