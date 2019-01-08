
exports.up = function(knex, Promise) {
    return knex.schema.createTable("expense", (table) => {
table.increments();
      table.string("expense_description");
      table.string("expense_amount");
      table.string("expense_month");
      table.string("expense_year");
      table.string("expense_messageFromServer");
      table.timestamps(true, true);
    })
};



    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable("expense")
};
