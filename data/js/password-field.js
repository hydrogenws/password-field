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