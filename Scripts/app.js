"use strict";
// IIFE - Immediately Invoked Function Expression
// means -> anonymous self-executing function
(function(){
    //IIFE scope
    //window.addEventListener("load", Start);

    let pro = document.getElementById("li2");

    pro.lastChild.lastChild.textContent = "Projects";

    console.log(pro);
})();