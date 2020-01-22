/*
* Author: Steven Mitchell
* Student ID: 100506443
* Date: Jan 22, 2019
*/

"use strict";
// IIFE - Immediately Invoked Function Expression
// means -> anonymous self-executing function
(function(){
    //IIFE scope
    //Assigns the li tag with an ID of li2 to the pro variable
    let pro = document.getElementById("li2");
    //Clones the last child of pro to the newLink variable
    let newLink = pro.cloneNode(true);
    //Assigns the ul tag with an ID of ul1 to the UL variable
    let UL = document.getElementById("ul1");
    //Assigns nav as the element to the nav variable
    let nav = document.createElement("nav");
    //main content of the website assigned to the main variable
    let main = document.getElementsByClassName("container")[0];
    //
    let anchor = document.createElement("a");

    //console.log(main);

    //Function to be executed when the page loads
    function Start()
    {
        //Prints the word Started to the console window
        console.log("%cStarted", "color:blue; font-size:18px");
    }

    //Event listeners for when the page is loaded
    window.addEventListener("load", Start);

    //First step (changing the products link to projects)
    //Changes the text content of the last child of the last child of the pro variable to Projects
    pro.lastChild.lastChild.textContent = " Projects";

    //Second step (adding the human resources link between the about us and contact us links)
    //Changes the text in the anchor tag of the second to last li tag from "Products" to "Human Resources"
    newLink.lastChild.lastChild.textContent = " Human Resources";
    //Changes the class of the i tag in the second to last li tag to give it a new icon
    newLink.lastChild.lastElementChild.setAttribute("class", "fas fa-users");
    //Inserts the cloned and modified node between the "about us" and "contact us" links
    UL.insertBefore(newLink, UL.lastElementChild);

    //Third step (adding the navbar to the bottom of the web page)
    //Sets the class of the navbar
    nav.setAttribute("class", "navbar fixed-bottom navbar-dark bg-dark");
    //Sets the class and href of the anchor tag to be added to the nav tag
    anchor.setAttribute("class", "navbar-brand", "href", "#");
    //Adds the copyright text to the anchor tag
    anchor.textContent = "\u00A9 Copyright 2020";
    //Appends the anchor tag to the nav tag
    nav.appendChild(anchor);
    //Adds the navbar to the page
    main.insertBefore(nav, main.lastElementChild);

})();