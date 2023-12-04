export default function setFromArray(array) {
  if (!(Array.isArray(array))) {
    throw new Error('That was not an array.');
  }
  return new Set(array);
}
