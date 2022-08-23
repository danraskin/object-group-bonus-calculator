$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
// ## Processing Employee Bonuses

// Loop over the `employees` array and do the following:


function bonusCalculator() {
  for (let employee of employees) {
    function employeeBonusCalc(employee) { // * use each employee object as the input to the function described below.
      let employeeBonus = {};
      let bonusPercentage = 0;
      employee.annualSalary = Number(employee.annualSalary);
      employeeBonus.name = employee.name; //// * The `name` property should contain the employee's name.
      if (employee.reviewRating === 3){
        bonusPercentage = 0.04;
        } 
      else if (employee.reviewRating === 4){
        bonusPercentage = 0.06;
      }
      else if (employee.reviewRating === 5){
        bonusPercentage = 0.10;
      }

      // checks for employee number length
      if (employee.employeeNumber.length === 4){
        bonusPercentage += 0.05;
      }

      if (employee.annualSalary > 65000){
        bonusPercentage -= 0.01;
      }

      // checking for bonus range - must be between 0 and 13

      if (bonusPercentage > 0.13){
        bonusPercentage = 0.13;
      }
      else if (bonusPercentage <=0){
        bonusPercentage = 0;
      }

      employeeBonus.bonusPercentage = bonusPercentage; // * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
      employeeBonus.totalBonus = Math.round(employee.annualSalary * bonusPercentage) ; // * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.
      employeeBonus.totalCompensation = employee.annualSalary + employeeBonus.totalBonus; // * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)

   
      displayEmployeeBonus(employeeBonus);
      

      
      return employeeBonus; // returns a new **object** with the following properties:

    }
  console.log (employeeBonusCalc(employee)); // * `console.log` the results of each iteration.
  }
}
function displayEmployeeBonus(theEmployee){
  $( '#output' ).append(
    `Name: ${theEmployee.name}, 
    Bonus Percentage: ${theEmployee.bonusPercentage}, 
    Total Bonus: ${theEmployee.totalBonus}, 
    Total Compensation: ${theEmployee.totalCompensation}` 
  );
}
// ### Individual Bonus calculation
// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.

// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.

// ## Stretch Goals
// - Put the output on the DOM (visually on the page).
// - Make the app run only after the user clicks on a button on the page
// - Then style the output, making it visually appealing.

function readyNow (){
  console.log('JQ');
  $('#bonus').on('click', bonusCalculator);
}
