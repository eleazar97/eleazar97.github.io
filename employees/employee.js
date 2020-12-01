//Define the actions of the Employees object, method
function printEmployee()
{
    var name_line = "<td>" + this.name + "</td>";
    var title_line = "<td>" + this.title + "</td>";
    var phone_line = "<td>" + this.phone + "</td>";

    var row = "<tr>" + name_line + title_line + phone_line + "</tr>";
    document.write (row);
}


//Define an object using constructor function
function Employee(name, title, phone)
{
    //List of attributes for this object 
    this.name = name;
    this.title = title;
    this.phone = phone;
    //Assign method to the employee object 
    this.printEmployee = printEmployee;
}

// Create employee objects
var nick = new Employee("Nick","Instructor","(956) 872-3445");
var lisa = new Employee("Lisa Simpson","Teacher", "(956 333-1111)");
var mike = new Employee("Mike Tyson", "Boxer", "(956) 787-2222");
//Dislpay the employee information
//nick.printEmployee();
//lisa.printEmployee();
//mike.printEmployee();

//create an array of employee names
var empArray = [nick.name, lisa.name, mike.name];

empArray = empArray.sort(); //Built in sort function sorts letter but not numbers

for( var counter = 0; counter < empArray.length; counter++)
{
    document.write(empArray[counter] + "<br>");
}