let PIN_Regex = RegExp('^[0-9]{3,3}[ ]?[0-9]{3,3}$');
let sample = "400 088";
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