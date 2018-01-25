const strings = {
  ordered: [],
  unordered: [],
};

const sortString = (string) => {
  strings.unordered.push(string);
  const ordered = string.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  strings.ordered.push(ordered);
  return strings;
};

module.exports = sortString;
