function disemvowel(str) {
  str = str.replace( /[aeiou]/ig, '' );
  return str;
}

console.log(disemvowel("This website is for losers LOL!"));