
const db = require("../data/db-Config");


async function find() { 
    const retrieval = await db("recipes as recs")
    .leftJoin("steps as st", "recs.recipe_id", "st.recipe_id")
    .leftJoin("ingredients as ings",'recs.recipe_id','ings.recipe_id')
    .select("recs.recipe_id", "recs.recipe_name","recs.created_at", "st.*","ings.*")    
    .orderBy("st.step_number", "asc")

  const format = []

  retrieval.forEach(recipe => {
     
    
      format.push({
          recipe_id:recipe.recipe_id,
          recipe_name:recipe.recipe_name,
          created_at:recipe.created_at,
        
        steps: [{
            step_id: recipe.step_id,
            step_number: recipe.step_number,
            step_instructions: recipe.step_instructions,
          ingredients:[{
            ingredient_id:recipe.ingredient_id,
            ingredient_name:recipe.ingredient_name,
            ingredient_quantity:recipe.ingredient_quantity
          }]
        }]
      })
    
  })
  return format
  
}


module.exports={find}