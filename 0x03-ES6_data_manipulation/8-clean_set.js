export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  let str = '';

  for (const s of set) {
    if (typeof (s) === 'string' && s.startsWith(startString)) {
      if (str !== '') str += '-';
      str += s.slice(startString.length);
    }
  }

  return str;
}
