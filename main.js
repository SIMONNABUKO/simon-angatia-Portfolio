"use strict"
function toggleMenu(){
    let toggler = document.querySelector(".toggler");
    let showMenu=document.getElementsByClassName("nav-item");
    let togglerHide = document.querySelector(".togglerhide");
    for(let i = 0; i<showMenu.length; i++){
        showMenu[i].style.display ="block";
        
    }
    toggler.style.display="none"; 
    togglerHide.style.display="block";    
    }
function toggleHideMenu(){
    let togglerHide = document.querySelector(".togglerhide");
    let toggler = document.querySelector(".toggler");
    let showMenu=document.getElementsByClassName("nav-item");
    for(let i = 0; i<showMenu.length; i++){
        showMenu[i].style.display ="none";
        
    }
    toggler.style.display="block"; 
    togglerHide.style.display="none"; 

}