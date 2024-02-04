function displayValue(val)
{
    document.getElementById("display").value = document.getElementById("display").value+val;
}
function clearDisplay()
{
    document.getElementById("display").value="";
}
function calculate()
{
    var input=document.getElementById("display").value;
    var result=eval(input);
    document.getElementById("display").value=result;
}
function clearonevalue()
{
    document.getElementById("display").value = document.getElementById("display").value +"";
}
