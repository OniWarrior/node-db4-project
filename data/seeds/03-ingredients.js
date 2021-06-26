const ingredients = [
    { recipe_id: 1, ingredient_quantity: 2, ingredient_name: 'Beef Stragonoff' },      
    { recipe_id: 2, ingredient_quantity: 1, ingredient_name: 'store bought Frozen pepperoni pizza' },
    { recipe_id: 3, ingredient_quantity: 3, ingredient_name: 'Barbacoa' },
    { recipe_id: 3, ingredient_quantity: 5, ingredient_name: 'White flour tortillas' },   
    { recipe_id: 4, ingredient_quantity: 1, ingredient_name: 'Ground Beef' },
    { recipe_id: 4, ingredient_quantity: 3, ingredient_name: 'pack of taco shells' },
    { recipe_id: 5, ingredient_quantity: 1, ingredient_name: 'Carton of Eggs' },
    { recipe_id: 5, ingredient_quantity: 1, ingredient_name: 'pack of bacon' },
    { recipe_id: 6, ingredient_quantity: 3, ingredient_name: 'Beef Stir fry' }    
  ]
  
  exports.ingredients = ingredients
  
  exports.seed = function (knex) {
    return knex('ingredients').insert(ingredients)
  }