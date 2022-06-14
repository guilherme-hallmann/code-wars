function XO(str) {
  const format = str.toLowerCase().split('');
  let x = 0; let o = 0;
  const z = format.map((l) => {
    if (l === 'x') x++;
    if (l === 'o') o++;
  });
  const y = x === o ? true : false;
  return y;
}

// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }
// answer with simpler solution that i didn't think of LOL
