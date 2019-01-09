
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenses').del()
    .then(function () {
      // Inserts seed entries
      return knex('expenses').insert([
        {expense_description: 'expense_description One', expense_amount: '1000', expense_spender_id: 1, expense_reason: 'expense_reason One', expense_details: 'expense_details One', expense_date: '1/1/2019', expense_paid: true,  expense_paid: true},
        {expense_description: 'expense_description Two',  expense_amount: '2000', expense_spender_id: 2, expense_reason: 'expense_reason Two', expense_details:  'expense_details Two', expense_date: '1/1/2019', expense_paid: false,  expense_paid: true},
        {expense_description: 'expense_description Three',  expense_amount: '3000', expense_spender_id: 3, expense_reason: 'expense_reason Three', expense_details: 'expense_details Three', expense_date: '1/1/2019', expense_paid: true,  expense_paid: true}
      ]);
    });
};
