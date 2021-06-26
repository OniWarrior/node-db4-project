const { default: knex } = require("knex")

const recipes = [
    { recipe_name: 'Beef Stragonoff' },
    { recipe_name: 'Pepperoni Pizza' },
    { recipe_name: 'Barbacoa' },
    { recipe_name: 'Tacos' },
    { recipe_name: 'Eggs with Bacon' },
    { recipe_name: 'Beef Stir Fry' }    
  ]
  
  exports.recipes = recipes
  
  exports.seed = function (knex) {
    return knex('recipes').insert(recipes)
  }