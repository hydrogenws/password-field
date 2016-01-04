var passCount = document.querySelectorAll(".show-password-field").length;
for(var i=0; i < passCount; i++)
{
    document.querySelectorAll(".show-password-field").item(0).type = 'password';
    document.querySelectorAll(".show-password-field").item(0).classList.remove("show-password-field");
}