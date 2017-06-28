const getFactors = function (n) {
  let factors = [];
  let x = 1;
  let y;

  while (x * x <= n) {
    y = Math.floor(n / x);
    if (y * x === n) {
      factors.push(x);
      if (y !== x) {
        factors.push(y);
      }
    }
    x++;
  }
  return factors.sort((a, b) => b - a);

};

const getPeaks = function (A) {
  let peaks = [];

  for (let i = 1 ; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
};

const solution = function (A) {
  let factors = getFactors(A.length);
  let peaks = getPeaks(A);
  let maxblocks = 0;

  for (let i = 0; i < factors.length; i++) {
    let blocks = A.length / factors[i];
    let peakRegister = {} ;
    let peakBlock;

    for (let p = 0 ; p < peaks.length; p++) {
      peakBlock = Math.floor((peaks[p] / A.length) * blocks);
      peakRegister[peakBlock] = true;
    }
    console.log(peakRegister);
    if (Object.keys(peakRegister).length === blocks) maxblocks = blocks;
  }
  return maxblocks;
};

export default solution;
