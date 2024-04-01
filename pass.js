
//this function displays the value of the range 

var range=8;
function getValue()
{
    range=document.getElementById("range").value;
    document.getElementById("length").innerHTML=range;
}


//main logic

var pass=[];
var nchecked=3;
function makePass()
{
    document.getElementById("password").value="";
    var find= document.getElementById("all").checked;
    while(pass.length < range)
    {
        var num=Math.floor(Math.random()*nchecked)

         
        if((document.getElementById("lower").checked == true || find ==true)  && num==0)
        {
            pass.push(upperPass())
        }

        if((document.getElementById("upper").checked ==  true || find ==true) && num==1)
        {
            pass.push(lowerPass())
        }

        if((document.getElementById("number").checked == true || find ==true) && num == 2)
        {
            pass.push(numberPass())
        }
    }

    displayPass()
   
}

//displays the password to the users

var strongPass="";

function displayPass()
{
    
    for(let i in pass)
    {
        strongPass+=pass[i]
    }

   document.getElementById("password").value=strongPass
   strongPass="";
   pass=[]
   
}




//functions that generates uppercase , lowercase and number randomly

function upperPass()
{
    return(String.fromCharCode((Math.floor(Math.random()*(90-65)+65))))
}

function lowerPass()
{
    return(String.fromCharCode(Math.floor(Math.random() * (122 - 97)+97)))
}

function numberPass()
{
    return(Math.floor(Math.random()*(9 - 0)+0))
}





// to change the checkbox values if all is true then remaining checkboxes changed to false

function change()
{
    if(document.getElementById("all").checked == true)
    {
        document.getElementById("all").checked = false
    }
    
}

function allChanges()
{

        document.getElementById("lower").checked=false;
        document.getElementById("upper").checked=false;
        document.getElementById("number").checked=false;
    
}