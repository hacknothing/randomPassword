

var pass=[];

function makePass(){
    for(let i=0;i<8;i++)
    {
        var num=Math.floor(Math.random()*3)
        
        switch(num)
        {
           
            case 1:var up=upperPass();
                   pass.push(up);
                   break;
            case 2:var lp=lowerPass();
                   pass.push(lp)
                   break;
            case 3:var np=numberPass();
                   pass.push(np);
                    break;
            default:alert(1);
       }
       alert(pass)
    }
    // alert(pass)
}

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