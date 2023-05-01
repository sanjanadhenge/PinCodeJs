let EMAIL_Regex =  RegExp('^[0-9a-zA-Z]+[@][a-zA-Z]');
let sample = "abc@bridgelabz";
ValidatePincode(sample,EMAIL_Regex);
function ValidatePincode(email,EMAIL_Regex)
{
    if(EMAIL_Regex.test(email))
    {
        console.log("valid");
    }
    else
    {
        console.log("Invalid");
    }
}