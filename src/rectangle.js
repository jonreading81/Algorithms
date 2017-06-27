const solution = function (area) {
  let width = 1;
  let height = area;
  let perimeter = 2 * (width + height);

  while (width * width <= area) {
    height = Math.floor(area / width);
    if (height * width === area) {
      perimeter = Math.min(perimeter, 2 * (width + height));
    }
    width++;

  }
  return perimeter;

};

export default solution;
