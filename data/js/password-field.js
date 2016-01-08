var passwordFieldCount = document.querySelectorAll('.show-password-field').length;
if (passwordFieldCount > 0 ) {
    for(var i=0; i < passwordFieldCount; i++)
    {
        document.querySelectorAll('.show-password-field').item(0).type = 'password';
        document.querySelectorAll('.show-password-field').item(0).classList.remove('show-password-field');
    }
} else {
    var fieldCount = document.querySelectorAll('input[type=password]').length;
    for(var i=0; i < fieldCount; i++)
    {
        document.querySelectorAll('input[type=password]').item(0).classList.add('show-password-field');
        document.querySelectorAll('input[type=password]').item(0).type = 'text';
    }
}



/*
// find cleared/shown password fields BUT NOT WORK (We don't have type in clearPassword)
var clearPassword = document.querySelectorAll('.show-password-field');
if (clearPassword) { // if found
    clearPassword.type = 'password'; // MUST CHANGE BACK TO PASSWORD BUT NOT WORK
    clearPassword.classList.remove('show-password-field'); // remove the class
} else {
    // find the password input
    var password = document.querySelectorAll('input[type=password]');
    if (password) { // if found
        password.type = 'text'; // MUST SHOW PASSWORD BUT NOT WORK
        password.classList.add('show-password-field'); // add class
    }
}
*/
