const solution = function (str) {
  const tags = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  let stack = [];
  let chars = str.split('');
  const parseTag = (char) => {
    if (tags[char]) {
      stack.push(tags[char]);
    } else if (char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
    return true;
  };

  if (chars.every(parseTag) && stack.length === 0) {
    return 1;
  }
  return 0;
};

export default solution;
