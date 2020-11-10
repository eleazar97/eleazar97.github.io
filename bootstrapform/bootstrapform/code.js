function checkEmail()
{
    //Check textboxes to make sure they are not empty 
    //Check to see if the text in both boxes is the same
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "") //Conditional expression, when it is true, then the code in the back will be executed
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    } 
    else
    {
        document.getElementById("email-error").innerHTML = "";
    }
    //check to see if confirm textbox is empty
    if(confirm == "") //Conditional expression, when it is true, then the code in the back will be executed
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    } 
    else
    {
        document.getElementById("confirm-error").innerHTML = "";
    }
    //Check if both textboxes have the same value
    if(email != confirm)//if the two strings are not the same
    {
        //Print error
        document.getElementById("email-error").innerHTML = "Both emails must be the same";
        document.getElementById("confirm-error").innerHTML = "Both emails must be the same";
    }

}

function pizzaOrder()
{
    var output = "<h3>Pizza Order:";
//Radio Buttons
    if(document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if( document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else{
        output += " Large ";
    }
    //Checkboxes
    if( document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni";
    }
    if(document.getElementById("sausage").checked == true)
    {
        output += " Sausage ";
    }
    if(document.getElementById("mashrooms").checked == true)
    {
        output += " Mashrooms ";
    }
    //Output Statement
    document.getElementById("output").innerHTML = output + "</h3>";
}