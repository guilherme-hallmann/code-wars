function duplicateEncode(word){
  let object = {};
  let letters = word.toLowerCase().split('');
  for(let i = 0; i < letters.length; i++) {
    let key = letters[i];
    if (object[key] === undefined) {
      object[key] = 1;
    } else {
      object[key] += 1;
    }
  }
  return letters.map((l) => object[l] === 1 ? '(' : ')').join('');
}