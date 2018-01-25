const strings = {
  ordered: [],
  unordered: [],
};

const sortString = (string) => {
  const ordered = string.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  return ordered;
};

const addToObject = (string) => {
  strings.unordered.push(string);
  strings.ordered.push(sortString(string));
  return strings;
};

module.exports = {
  sortString,
  addToObject,
};
