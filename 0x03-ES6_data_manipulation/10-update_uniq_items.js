export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [_, value] of map) {
    if (value === 1) map.set(_, 100);
  }
  return map;
}
