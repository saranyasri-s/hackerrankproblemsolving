function pangrams(str) {
  let trimStr = "";
  for (let letter of str) {
    if (letter !== " ") {
      trimStr = trimStr + letter;
    }
  }

  let obj = {};
  for (let letter of trimStr) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  let numOfAlphabets = 0;
  for (let key in obj) {
    numOfAlphabets = numOfAlphabets + 1;
  }
  if (numOfAlphabets !== 26) {
    return "not pangram";
  }
  return "pangram";
}
console.log(pangrams("edsgwegsghabcdef   ightjklmnopqrstuvwxyz"));
