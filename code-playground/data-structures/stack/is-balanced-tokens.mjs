const isBalancedTokens = (str) => {
  const tokens = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ];
  const stack = [];

  const isOpenToken = (token) => {
    return tokens.some((pair) => pair[0] === token);
  };

  const matches = (openToken, closeToken) => {
    return tokens.some((pair) => pair[0] === openToken && pair[1] === closeToken);
  };

  const isBalanced = (stack) => {
    return stack.length === 0;
  };

  for (let token of str) {
    if (isOpenToken(token)) {
      stack.push(token);
    } else {
      const openToken = stack.pop();
      if (!matches(openToken, token)) {
        return false;
      }
    }
  }

  return isBalanced(stack);
};

console.log(`isBalancedTokens('()')`, isBalancedTokens('()')); // true
console.log(`isBalancedTokens('()[]{}')`, isBalancedTokens('()[]{}')); // true
console.log(`isBalancedTokens('(]')`, isBalancedTokens('(]')); // false
console.log(`isBalancedTokens('([)]')`, isBalancedTokens('([)]')); // false
console.log(`isBalancedTokens('{[]}')`, isBalancedTokens('{[]}')); // true
console.log(`isBalancedTokens('')`, isBalancedTokens('')); // true
console.log(`isBalancedTokens('[')`, isBalancedTokens('[')); // false
