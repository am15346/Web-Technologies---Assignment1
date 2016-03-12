"use strict";

//Only execute on full page load
addEventListener('load', main);

function main()
{
    inject("header", "/structure/header/header.html");
    inject("footer", "/structure/header/footer.html")
}

function inject(find, location)
{
    var file = new XMLHttpRequest();
    file.open('GET', location);
    file.onreadystatechange = function() 
    {
        if(file.status == 200)
        {
            document.querySelector(find).innerHTML = file.responseText;
        }
    }
    file.send();
}