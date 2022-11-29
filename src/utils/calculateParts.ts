/* eslint-disable no-loop-func */
import { CarI } from "../interfaces/contexts";

// Array of all results that we use to avoid duplicate results
// and that gets reset if all combinations are used
let allResults: string[] = [];

// Random number function that we use for spliting the number
// Returns random N > 0 && N <=
const randomNum = (max: number) => {
  return Number((1 + Math.random() * max).toFixed(0));
};

// Function that splits desired number into number of Cars
// where every car needs to get at least 1 number(no zeros)
// and where solution will always be different until we get
// all possible combinations
export const calculateArmyParts = (input: number, cars: CarI[]) => {
  // Array of numbers that holds the result
  let arr: number[] = [];
  //   Counter for number of tries if we have duplicate solution in our all results array
  let count: number = 0;

  //   Runs while all results array is empty and if there's already the same solution in the array
  do {
    // Every time it runs we increase the counter by one
    count++;

    // First number needs to be between 1 and length of Cars array
    // because we need to have space for other elements of the result
    // and don't have zero values
    const first = randomNum(input - cars.length);
    arr.push(first);

    // Then we need to have rest of the input number
    // so we can get random numbers from it for other elements
    let rest = input - first;

    // Length that we use for looping through the cars array
    // has to be smaller then the original array by 2
    // because first element is already used
    // and when we loop through array we go from 0 not from 1
    // and so our array length is smaller then we get from length function
    const length = cars.length - 2;
    cars?.slice(1, cars.length).forEach((_c, index) => {
      // If we get to the last Car then the last element of result is rest of the input number we decreased by every step
      if (index === length) {
        arr.push(rest);
        return;
      }
      // If we work on Car that's not last
      // then the element is decreased "rest"
      // by the random number between 1 and the rest
      const element = rest - randomNum(rest - 2);
      arr.push(element);
      rest = rest - element;
    });

    // If we didn't have that solution before
    // we then push it to the array of all results
    if (!allResults.includes(arr.join())) {
      allResults.push(arr.join());
      break;
    }

    // HACK *** Application was crashing without this boundary
    // Didn't figured out how to clean the array
    // if we run out of combinations
    // so I intuitively put maximum number of tries to be 20
    // and if after 19 same results we don't get the new one
    // then we look at it like there are no more combinations
    // and we clean the all results array and start from the beggining
    if (count === 20) {
      allResults = [];
    }
    // If there is the same solution like this one
    // we then empty the array because of the new try
    arr = [];
  } while (allResults.length === 0 || !allResults.includes(arr.join()));

  // Returning the solution
  return arr;
};
