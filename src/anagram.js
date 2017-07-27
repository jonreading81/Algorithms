function anagram (a, b) {
  if(a.length !== b.length) return false;

  let arrB = b.split('');
  let arrA = a.split('');
  let pos;

  const allFound = arrA.every(letter =>{
    pos = arrB.indexOf(letter);
    if(pos >= 0){
      arrB.splice(pos, 1);
      return true;
    }else{
      return false;
    }
  });
  return (allFound && arrB.length === 0);
};

function solution (a, b) {
  const c = anagram(a, b);
  return c;
}



export default solution;
