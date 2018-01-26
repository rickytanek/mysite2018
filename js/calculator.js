// When window load, run this function
window.onload = function()
{
    var screen; // result div. shows math calculation string
    var output; // for calculating the math string e.g "1 x 2 + 3"
    var limit;  // limit for calculated input to 16 characters
    var zero;   // for zero button click processing
    var period; // for period button click processing
    var operator; // for handling operator click

    screen = document.getElementById("result");  // assign result to screen
    output = "";         // initialise output to empty
    screen.innerHTML = ""; // initialise screen to empty

    var elem = document.querySelectorAll(".num");  // find all with .num class
    //num class does not exist in css but we put in html so that we can select it
    // contains a list of button objects = 9 (1 to 9)

    var len = elem.length;  // how many elements have the .num class

    for (var i = 0; i < len; i++)
    {
        elem[i].addEventListener("click",function()  // listen for mouse click on numbers
        {
            num = this.value;    // get the button value of button bring clicked
            output = screen.innerHTML += num; // get value of existing value in screen and append num to it and assign to output
            limit = output.length;   // set how many numbers keyed in 

            if (limit > 16)       // check if total characters keyed in exceed screen size limit?
            {
                alert("You have exceeded the maximum number of input allowed.");
            }

        }, false); // false is part of the addeventlistener boolean parameter needed
    }

    var elemZero = document.querySelector(".zero");  // refers to button Zero, assign it to elemZero
    elemZero.addEventListener("click",function()
    {
        zero = this.value;    // this.value refers to elemZero. Zero is auto created as a var

        if (screen.innerHTML === "")    // comparing div tag element need ===. Check if screen is blank
        {
            screen.innerHTML = zero;  
            output = screen.innerHTML;
        }
        else
        {
            if (screen.innerHTML === output)   // screen has some numbers already
            {
                screen.innerHTML = screen.innerHTML + zero;
                output = screen.innerHTML;
            }

        }
    }, false);

    document.querySelector(".period").addEventListener("click",function()
    {
        period = this.value;

        if (screen.innerHTML === "") // if result is 0, then add 0. to result
        {
            screen.innerHTML = screen.innerHTML.concat("0.");
            output = screen.innerHTML;
        }
        else
        {
            if (screen.innerHTML === output)  // if something on screen then add . to it
            {
                screen.innerHTML = screen.innerHTML + period;
                //   alternative : screen.innerHTML = screen.innerHTML.concat(".");
                output = screen.innerHTML;
            }
        }
    }, false);

    document.querySelector("#delete").addEventListener("click",function()
    {
        screen.innerHTML = "";
        output = "";
    }
    ), false;

 // Handle operators
    var elemOperator = document.querySelectorAll(".operator");
    var len2 = elemOperator.length;

    for (i = 0; i < len2; i++)
    {
        elemOperator[i].addEventListener("click",function()
        {
            operate = this.value;
           
            if (screen.innerHTML === "") // if blank screen, do nothing
            {
                screen.innerHTML = screen.innerHTML.concat(""); // or use the method in equal
            }
            else
            {
                if (output)  // if something on screen, then add the operator to it
                {
                    screen.innerHTML = screen.innerHTML.concat(operate);
                    output = screen.innerHTML;  // assign back to screen after adding
                }
            }
        }
        ), false;
    }

    // Handle equal button
    document.querySelector("#eqn-bg").addEventListener("click",function()
    {
        if (screen.innerHTML === "")
        {
            screen.innerHTML = "";  // if empty then set to empty
            output = "";
        }
        else
        {
            if (screen.innerHTML === output)
            {
                screen.innerHTML = eval(output); // use eval function to get the result
                output = screen.innerHTML;    // show back on screen
            }
        }
    }
    ), false;
}