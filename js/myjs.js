   var username = "Ricky Tan";     // assign a value to these 2 variables
   var email = "ricky@abc.com";

   function getConfirmation()
   {
       var retVal = confirm("Do you want to continue?");
       if (retVal == true)
       {
           document.getElementById("name").value = username; // take top value and put into input box
           document.getElementById("email").value = email;
         //  document.write("User will proceed");
         //  return true;   // not necessary to be added
       } 
       else
       {
         //  document.write("User has cancelled the operation");
         //  return false;  // not necessary to be added
       }
   }