// Code your solution in this file!
function distanceFromHqInBlocks(endBlock){
    // returns the number of blocks given a value
    return (Math.abs(endBlock - 42));
}

function distanceFromHqInFeet(endBlock){
    // call the distanceFromHqInBlocks,
    const blocksBetween = distanceFromHqInBlocks(endBlock);
    // passing the argument from distanceFromHqInFeet to it
    // return value from distanceFromHqInFeet is used to calculate feet
    return (blocksBetween * 264);
}

function distanceTravelledInFeet(start, destination){
    // returns the number of feet traveled
    const distanceBetweenInFeet = (Math.abs(destination - start)) * 264;
    return distanceBetweenInFeet;
}

function calculatesFarePrice(start, destination){
    // returns the fare for the customer
    const distanceBetweenInFeet = distanceTravelledInFeet(start, destination);

    // Free sample below 400 feet
    if(distanceBetweenInFeet < 400){
        return 0;
    }
    else if(distanceBetweenInFeet > 400 && distanceBetweenInFeet < 2000){
        return (distanceBetweenInFeet - 400)*0.02;
    }
    else if(distanceBetweenInFeet > 2000 && distanceBetweenInFeet < 2500){
        return 25;
    }
    else if(distanceBetweenInFeet > 2500){
        return 'cannot travel that far';
    }
}