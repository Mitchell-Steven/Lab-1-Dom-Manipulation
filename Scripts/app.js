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

    //Function to be executed when the page loads
    function Start()
    {
        console.log("%cStarted", "color:blue; font-size:18px");
    }

    //Event listeners for when the page is loaded
    window.addEventListener("load", Start);

    //Changes the text content of the last child of the last child of the pro variable to Projects
    pro.lastChild.lastChild.textContent = " Projects";

    //Changes the text in the anchor tag of the second to last li tag from "Products" to "Human Resources"
    newLink.lastChild.lastChild.textContent = " Human Resources";
    //Changes the class of the i tag in the second to last li tag to give it a new icon
    newLink.lastChild.lastElementChild.setAttribute("class", "fas fa-users");

    //Inserts the cloned and modified node between the "about us" and "contact us" links
    UL.insertBefore(newLink, UL.lastElementChild);
    
    

})();