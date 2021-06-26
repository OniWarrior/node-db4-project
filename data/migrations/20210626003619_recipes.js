
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes',table=>{
        table.increments('recipe_id')
        table.string('recipe_name',128).notNullable().unique()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('steps',table=>{
        table.increments('step_id')
        table.integer('step_number').unsigned().notNullable()
        table.string('step_instructions',200).notNullable()
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('ingredients',table=>{
        table.increments('ingredient_id')
        table.string('ingredient_name',128).notNullable()
        table.decimal('ingredient_quantity').notNullable()
        table.integer('recipe_id')
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('igredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')

};
