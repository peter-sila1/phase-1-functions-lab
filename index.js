// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    const hq = 42;
    return Math.abs(streetNumber - hq);
  }
  
  function distanceFromHqInFeet(streetNumber) {
    const block = 264; // 1 block is 264 feet
    return distanceFromHqInBlocks(streetNumber) * block;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const block = 264; // 1 block is 264 feet
    return Math.abs(start - destination) * block;
  }
  
  function calculatesFarePrice(start, destination) {
    const freeDistance = 400;
    const maxDistance = 2500;
    const chargeableDistance = distanceTravelledInFeet(start, destination) - freeDistance;
    let fare = 0;
  
    if (chargeableDistance <= 0) {
      fare = 0;
    } else if (chargeableDistance <= 1600) { // 2000 - 400
      fare = chargeableDistance * 0.02;
    } else if (chargeableDistance <= 2100) { // 2500 - 400
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    return fare;
  }