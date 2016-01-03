var passCount = document.querySelectorAll("input[type=password]").length;
for(var i=0; i < passCount; i++)
{
    document.querySelectorAll("input[type=password]").item(0).type = 'text';
}
