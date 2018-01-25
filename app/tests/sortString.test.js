const { sortString } = require('../server/util/helpers');

test('sorts string in lexographically descending order', () => {
  expect(sortString('cba')).toBe('abc');
  expect(sortString('asd123')).toBe('123ads');
  expect(sortString('nysh')).toBe('hnsy');
});