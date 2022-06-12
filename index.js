function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(blocks) {
  return 264 * distanceFromHqInBlocks(blocks);
}

function distanceTravelledInFeet(start, destination) {
  const distanceTravelled = Math.abs(start - destination);
  return distanceTravelled * 264;
}

console.log("Distance", distanceTravelledInFeet(34, 38));

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet > 2500) return "cannot travel that far";
  if (distanceInFeet <= 400) return 0;
  if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  }
  return 25;
}

console.log(distanceFromHqInBlocks(10));
