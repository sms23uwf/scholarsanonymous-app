// named export isAdult() - true if adult, otherwise false
// named export canDrink() - true if 21 and over, otherwise false

const legalAdultAge = 18;
const legalDrinkingAge = 21;
const traditionalSeniorAge = 65;

export const isAdult = (age) => age >= legalAdultAge;

export const canDrink = (age) => age >= legalDrinkingAge;

const isSenior = (age) => age >= traditionalSeniorAge;

export default isSenior;