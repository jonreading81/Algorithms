const getPeakIndexes = function (heights) {
  const peaks = [];

  for (let i = 1; i < heights.length - 1; i++) {
    if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
};

const solution = function (heights) {
  const peakIndexes = getPeakIndexes(heights);
  let flagsAvailable;
  let maxFlags;
  let maxFlagsPlaced = 0;
  let flagsPlaced;
  let peak;

  if (peakIndexes.length === 1) return 1;

  maxFlags = Math.ceil(Math.sqrt(peakIndexes[peakIndexes.length - 1 ] - peakIndexes[0]));
  flagsAvailable = maxFlags;
  while(flagsAvailable > 0 && maxFlagsPlaced < maxFlags){
    flagsPlaced = [peakIndexes[0]];
    for (peak = 1; peak < peakIndexes.length; peak++) {
      if (flagsPlaced.length === flagsAvailable) {
        break;
      }
      if (peakIndexes[peak] - flagsPlaced[flagsPlaced.length - 1] >= flagsAvailable) {
        flagsPlaced.push(peakIndexes[peak]);
      }
      maxFlagsPlaced = Math.max(maxFlagsPlaced, flagsPlaced.length);
    }
    flagsAvailable--;
  }
  return maxFlagsPlaced;
};

export default solution;
