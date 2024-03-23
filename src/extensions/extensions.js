// 1. To help Phil keep track of his baking time, create a function named
// timerStatus that accepts one parameter:
// - the remaining minutes left on a timer
// The function must return "Phil's cake is ready!" if the remaining minutes is 0,
// "The cake is still baking!" if there are any remaining minutes left,
// or "You didn't set a timer!" if no value is provided to the parameter

function timerStatus(minutesRemaining) {
  let message = ''
  if (minutesRemaining > 0) {
    message = 'The cake is still baking!'
  } else if (minutesRemaining === 0) {
    message = "Phil's cake is ready!"
  } else {
    message = "You didn't set a timer!"
  }
  return message
}

// 2. To help Phil prepare ahead of time, create a function named estimatePrepTime
// that accepts two parameters:
// - an array of ingredients (e.g. ["sugar", "milk", "flour", "eggs"])
// - the prep time per ingredient in minutes
// The function must return the total prep time the cake will require based on the
// number of ingredients provided and the prep time per ingredient.
// If no prep time per ingredient is provided, the function should assume each ingredient
// takes 2 minutes to prepare

function estimatePrepTime(ingredientsArray, ingredientPrepMinutes) {
  let totalPrepTime = 0
  const ingredientsArrayLength = ingredientsArray.length

  if (ingredientPrepMinutes) {
    totalPrepTime = ingredientsArrayLength * ingredientPrepMinutes
  } else {
    totalPrepTime = ingredientsArrayLength * 2
  }
  return totalPrepTime
}
// const myStuff = ['nuts', 'deez', 'milk', 'eggs']
// console.log(estimatePrepTime(myStuff, 10))

// 3. Phil needs to know the quantity of milk and eggs to use! Create a function
// named calculateQuantities which accepts two parameters:
// - a list of ingredients
// - how many layers the cake has
// The cake will need 100g of sugar per layer and 2 eggs per layer, if those ingredients are present.
// The function should always return an object with two keys: sugar, eggs
// The values of the keys should be the total amount of sugar and eggs needed for the cake.
// If sugar or eggs are not present in the list of ingredients, the value for the key should be 0
//
// Example:
// calculateQuantities(["sugar", "milk", "eggs"], 2)
// returns: { sugar: 200, eggs: 4 }
//
// calculateQuantities(["milk", "eggs"], 3)
// returns: { sugar: 0, eggs: 6 }

function calculateQuantities(ingredientsArray, cakeLayers) {
  const requiredIngredients = {
    sugar: 0,
    eggs: 0
  }

  if (ingredientsArray.includes('sugar') === true) {
    requiredIngredients.sugar = 100 * cakeLayers
  }

  if (ingredientsArray.includes('eggs') === true) {
    requiredIngredients.eggs = 2 * cakeLayers
  }

  return requiredIngredients
}

// const myArray = ['sugar', 'eggs', 'milk', 'nuts']
// console.log(calculateQuantities(myArray, 5))

// 4. Phil's cake is pretty small and only provides 1 portion. He wants to make a bigger one!
// Create a function named improveRecipe that accepts two parameters:
// - an object where the keys are ingredients and the values are quantities
//      e.g. { eggs: 2, milk: 100, sugar: 250, flour: 160 }
// - the number of portions the cake should provide
//
// The function should return a new object with the same keys as the recipe provided,
// but the values should have updated amounts to make sure the cake provides enough portions.
//
// Example:
// improveRecipe({ eggs: 2, milk: 100, sugar: 200 }, 3)
// returns: { eggs: 6, milk: 300, sugar: 600 }

function improveRecipe(ingredientQuantityObj, numberOfPortions) {
  const resultObj = {}

  const keysArray = Object.keys(ingredientQuantityObj)
  const keysLength = keysArray.length

  for (let i = 0; i < keysLength; i++) {
    const currentIngredient = keysArray[i]

    resultObj[currentIngredient] =
      ingredientQuantityObj[currentIngredient] * numberOfPortions
  }

  return resultObj
}

// const myRecipe = {
//   eggs: 2,
//   milk: 300,
//   eggplant: 420
// }

// console.log(improveRecipe(myRecipe, 0))

// Don't change the code below this line
module.exports = {
  timerStatus /* eslint-disable-line no-undef */,
  estimatePrepTime /* eslint-disable-line no-undef */,
  calculateQuantities /* eslint-disable-line no-undef */,
  improveRecipe /* eslint-disable-line no-undef */
}
