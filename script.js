function rangeSlider(value)
{
    document.getElementById('rangeValue').innerHTML = value;
}
function calculate ()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById('range').value;
    var years = document.getElementById("years").value;
    var interest = document.getElementById("interest");
    var result = document.getElementById("result");
    result.innerHTML=  "The interest is " + (principal*years*(rate/100));
}
