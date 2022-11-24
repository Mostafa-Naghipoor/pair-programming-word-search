const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let str = '';
    let vertical = [];

    for (let x = 0; x < letters[0].length; x++) {
      for (let y = 0; y < letters.length; y++) {
        console.log(`letters[y][x]${letters[y][x]}`);
        str += letters[y][x];
      }
      vertical.push(str);
      str = '';
    }

    for (l of vertical) {
      if (l.includes(word)) return true
    }
  return false;
}

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD')

module.exports = wordSearch