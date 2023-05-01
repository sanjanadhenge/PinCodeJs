let EMAIL_Regex = RegExp('^[a-z]{3,}$');
let sample = "a";
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