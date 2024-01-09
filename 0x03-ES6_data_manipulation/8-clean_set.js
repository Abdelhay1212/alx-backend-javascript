export default function cleanSet(set, startString) {
  if (startString === '') return '';

  let str = '';

  for (const s of set) {
    if (s.startsWith(startString)) {
      if (str !== '') str += '-';
      str += s.slice(startString.length);
    }
  }

  return str;
}
