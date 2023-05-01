let EMAIL_Regex = RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}');
let sample = "abc.xyz@Brigelabz.co.in";
 arr = [ "abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com", "abc-100@abc.net", " abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com", "abc+100@gmail.com", "abc@.com.my", "abc123@gmail.a", "abc123@.com", "abc123@.com.com", ".abc@abc.com", "abc()*@gmail.com", "abc..2002@gmail.com", "abc.@gmail.com", "bc@abc@gmail.com", "abc@%*.com", "abc@gmail.com.1a", "abc@gmail.com.aa.au" ];
ValidatePincode(sample,EMAIL_Regex);
ValidateArray();
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
function ValidateArray()
{
    for (let i = 0; i < arr.length; i++)
    {
         let word = arr[i];
         if (EMAIL_Regex.test(word))
         {
             console.log("Valid----->" + word);
         }
         else
         {
             console.log("Invalid------>" + word);
         }
     }
}