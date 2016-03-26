function Person (name, id, salary, stars){
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.stars = stars;
}

var personA = new Person ("Atticus", 2405, 47000, 3); // <-- name, id, salary, stars
var personJ = new Person ("Jem", 62347, 63500, 4);
var personB = new Person ("Boo", 11435, 54000, 3);
var personS = new Person ("Scout", 6243, 74750, 5);

var employees = [personA, personJ, personB, personS];

function calcSti(employee) {
  var result = {};
    result.name = employee.name;

     // Checking employee rating
    switch (employee.stars) {
      case 3:
        result.percent=.04;
        break;
      case 4:
        result.percent=.06;
        break;
      case 5:
        result.percent= .1;
        break;
      default:
        result.percent= 0;
      }

      // Additional bonus % based on length at company
      if (employee.id.length <= 4) {  // is this a thing?
        result.percent += .05;
      }

      // Remove 1% if income is over $65,000
      if (employee.salary > 65000) {
        result.percent -= .01;
      }

      // If bonus is over 13% lower set it to 13%
      if (result.percent > .13) {
        result.percent = .13;
      }

      // Print Annual Income + STI to array
      var sti = parseInt(employee.salary)*result.percent;  //calculates STI
      var stiVal = sti + employee.salary;
      result.aai= "Adjusted annual income: $" + stiVal.toString(); // adds income and STI
      //console.log("Income + STI = " + result.aai);

      //Print Total bonus to array
      // Math.round()
      result.bonus = "Total bonus: $" + Math.round(employee.salary * result.percent);


      // Convert decimal to percentage string with %
      result.percent = result.percent * 100 + "%";

      // Final result
      console.log(result);
  }
for (var it = 0; it < employees.length; it++) {
  (calcSti(employees[it]));
}
