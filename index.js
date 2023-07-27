// Code your solution in this file!
const headquarters = 42;

const distanceFromHqInBlocks = (location) => {
  return location >= 42 ? location - headquarters : headquarters - location;
};

const distanceFromHqInFeet = (location) => {
  return distanceFromHqInBlocks(location) * 264;
};

const distanceTravelledInFeet = (start, destination) => {
  return destination >= start
    ? (destination - start) * 264
    : (start - destination) * 264;
};

const calculatesFarePrice = (start, destination) => {
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0
    } else if (distanceTravelledInFeet(start, destination) <= 1999 && distanceTravelledInFeet(start, destination) >= 401){
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) <= 2499 && distanceTravelledInFeet(start, destination) >= 2001){
        return 25
    } else{
        return 'cannot travel that far'
    }
}