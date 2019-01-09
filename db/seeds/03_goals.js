
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {goal_description: 'goal_description One', goal_expense_id: 1, goal_amount: '100.00', goal_month: 'January', goal_year: '2019'},
        {goal_description: 'goal_description Two', goal_expense_id: 2, goal_amount: '200.00', goal_month:  'February', goal_year: '2019'},
        {goal_description: 'goal_description Three', goal_expense_id: 3, goal_amount: '300.00', goal_month: 'March', goal_year: '2019'}
   
      ]);
    });
};

