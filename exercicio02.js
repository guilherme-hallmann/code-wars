function findOutlier(integers){
  if (integers.length < 3) {
    return false;
  }
  let odds = [];
  let evens = [];
  for (let i = 0; i < integers.length; i++) {
    if(integers[i] % 2 === 0) {
      evens.push(integers[i]);
    } else {
      odds.push(integers[i]);
    }
  }
  if (evens.length <= 1) {
    return evens[0];
  }
  if (odds.length <= 1) {
    return odds[0];
  }
}
