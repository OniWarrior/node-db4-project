module.exports = {
    development:{
        client:"sqlite3",
        useNullAsDefault:true,
        connections:{
            fileName:"./data/recipe.db3"
        },
        migrations:{
            directory:"./data/migrations"
        },
        seeds:{
            directory:'./data/seeds'
        },
        pool:{
            afterCreate:(con,done)=>{
                con.run('PRAGMA foreign_keys= ON',done)

            }
        }
    }
}