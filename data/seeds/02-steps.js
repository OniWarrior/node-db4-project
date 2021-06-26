const steps = [
  { recipe_id: 1, step_number: 2, step_instructions: 'Pick a good piece of beef' },
  { recipe_id: 1, step_number: 1, step_instructions: 'Simmer on low heat in a pan' },
  { recipe_id: 1, step_number: 3, step_instructions: 'Wait for 20 minutes' },
  { recipe_id: 2, step_number: 2, step_instructions: 'Place in bake pan and bake for 20 minutes' },
  { recipe_id: 2, step_number: 1, step_instructions: 'Preheat oven to 400F' },
  { recipe_id: 3, step_number: 3, step_instructions: 'Cook on Stove top for 15 minutes' },
  { recipe_id: 3, step_number: 2, step_instructions: 'Prepare the barbacoa to be cooked' },
  { recipe_id: 3, step_number: 1, step_instructions: 'Buy some barbacoa from the store' },
    { recipe_id: 4, step_number: 1, step_instructions: 'buy ground beef and taco shells from store' },
    { recipe_id: 4, step_number: 3, step_instructions: 'Cook ground beef on stove top on low heat for 15 min' },
    { recipe_id: 4, step_number: 2, step_instructions: 'prepare the ground beef to be cooked' },
    { recipe_id: 5, step_number: 1, step_instructions: 'buy eggs and bacon from store' },
    { recipe_id: 6, step_number: 4, step_instructions: 'seamlessly take their place' },
    { recipe_id: 6, step_number: 3, step_instructions: 'cook stir fry on low heat for 10 min' },
    { recipe_id: 6, step_number: 1, step_instructions: 'buy beef stir fry from store' },
    { recipe_id: 6, step_number: 2, step_instructions: 'prepare beef stir fry to be cooked' },
  ]
  
  exports.steps = steps
  
  exports.seed = function (knex) {
    return knex('steps').insert(steps)
  }