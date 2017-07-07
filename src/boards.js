const check = function (tiles, k) {
  let boards = 0;
  let last = -1;

  tiles.forEach((tile, index) => {
    if (tile === 1 && last < index) {
      boards++;
      last = index + k - 1;
    }
  });
  return boards;
};

const solution = function (tiles, k) {
  let start = 1;
  let end = tiles.length;
  let result = -1;
  let mid;

  while (start <= end) {
    mid = (start + end) / 2;
    if (check(tiles, mid) <= k) {
      end = mid - 1;
      result = mid;
    } else {
      start = mid + 1;
    }
  }
  return result;

};

export default solution;
