const solution = function (area) {
  let width = 1;
  let height = area;
  let perimeter = 2 * (width + height);

  while (width * width <= area) {
    if (area % width === 0) {
      perimeter = Math.min(perimeter, 2 * (width + (area / width)));
    }
    width++;

  }
  return perimeter;

};

export default solution;
