export const toKebab = (str) => str.replace(/\s+/g, '-').toLowerCase();

export const toTitle = (str) =>
  str
    .split('-')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
