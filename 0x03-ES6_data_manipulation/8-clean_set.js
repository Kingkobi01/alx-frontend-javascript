export default function cleanSet(set, startString) {
  const arr = [];
  if (startString) {
    for (const word of set) {
      if (word.startsWith(startString)) {
        arr.push(word.replace(startString, ''));
      }
    }
  }
  return arr.join('-');
}
