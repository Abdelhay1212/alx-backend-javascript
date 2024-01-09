export default function updateUniqueItems(m) {
  if (!m || !(m instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of m) {
    if (value === 1) {
      m.set(key, 100);
    }
  }
}
