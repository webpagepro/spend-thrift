
exports.up = function(knex, Promise) {
    return knex.schema.createTable("goals", (table) => {
table.increments();
      table.string("goals_description");
      table.string("goals_amount");
      table.string("goals_month");
      table.string("goals_year");
      table.string("goals_messageFromServer");
      table.timestamps(true, true);
    })
};
    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable("goals")
};
