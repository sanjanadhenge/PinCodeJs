let PIN_Regex = RegExp('^[0-9]{1}[0-9]{4,4}[0-9]{1}$');
let sample = "400088B";
ValidatePincode(sample,PIN_Regex);
function ValidatePincode(pin,PIN_Regex)
{
    if(PIN_Regex.test(sample))
    {
        console.log("valid");
    }
    else
    {
        console.log("Invalid");
    }
}