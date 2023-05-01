let PIN_Regex = RegExp('^[0-9]{1}[0-9]{5,}$');
let sample = "A400088";
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