"use strict";

//Only execute on full page load
addEventListener('load', main);

function main()
{
    randomise_last();
    randomise_posts();
    randomise_date();
}

function randomise_date()
{
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var last = document.querySelectorAll(".last_post p:nth-child(2)");
    for(var i = 0; i < last.length; i++)
    {
        var date = ran_num(28, 1);
        var ending = "th";
        if(date == 1 || date == 21) ending = "st";
        else if(date == 2 || date == 22) ending = "nd";
        else if(date == 3 || date == 23) ending = "rd";
        last[i].innerHTML = date + ending + " " + months[ran_num(11,0)] + " 201" + ran_num(6,5);
    }
}

function randomise_last()
{
    var last = document.querySelectorAll(".last_post p:nth-child(1)");
    for(var i = 0; i < last.length; i++)
    {
        randomise_name(last[i]);
    }
}

function randomise_posts()
{
    var topic_numbers = document.querySelectorAll(".topic_number p");
    var post_numbers = document.querySelectorAll(".posts_number p");
    for(var i = 0; i < topic_numbers.length; i++)
    {
        randomise_num(post_numbers[i], 1000, 100);
        randomise_num(topic_numbers[i], 100, 1);
    }
}

function ran_num(max, min)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomise_num(content, max, min)
{
    var RN = ran_num(max, min);
    content.innerHTML = RN;
    return content;
}

function randomise_name(content)
{
    var names = ["Laser Ozdonmez", "Stash Mambos", "Ian Hoyler"];
    var RN = ran_num(2, 0);
    content.innerHTML = "by " + names[RN] + " on";
    return content;
}