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

console.log(XO('xxo'));