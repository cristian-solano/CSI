document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("csi-menu");
    var menuIcon = document.getElementById("menu-icon");
    var pIcon = document.getElementById("p-icon");
    
    var openIcon = './Images/menu-toggle.png';
    var closeIcon = './Images/close.png';
    var closeWord = "Close"
 
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            menuIcon.src = closeIcon;
            pIcon.textContent = closeWord
        } else {
            menuIcon.src = openIcon;
            pIcon.textContent = "Menu"
        }
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    document.querySelector('.slides').style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});


function ViewFirst () {
    document.getElementById("view1").style.display = "flex"
    document.getElementById("view2").style.display = "none"
    document.getElementById("view3").style.display = "none"
    document.getElementById("view4").style.display = "none"
}

function ViewSecond () {
    document.getElementById("view1").style.display = "none"
    document.getElementById("view2").style.display = "flex"
    document.getElementById("view3").style.display = "none"
    document.getElementById("view4").style.display = "none"
}
function ViewThird  () {
    document.getElementById("view1").style.display = "none"
    document.getElementById("view2").style.display = "none"
    document.getElementById("view3").style.display = "flex"
    document.getElementById("view4").style.display = "none"
}
function ViewFourth () {
    document.getElementById("view1").style.display = "none"
    document.getElementById("view2").style.display = "none"
    document.getElementById("view3").style.display = "none"
    document.getElementById("view4").style.display = "flex"
}

function ViewFifth () {
    document.getElementById("view5").style.display = "flex"
    document.getElementById("view6").style.display = "none"
    document.getElementById("view7").style.display = "none"
    document.getElementById("view8").style.display = "none"
}

function ViewSixth () {
    document.getElementById("view5").style.display = "none"
    document.getElementById("view6").style.display = "flex"
    document.getElementById("view7").style.display = "none"
    document.getElementById("view8").style.display = "none"
}
function ViewSeventh  () {
    document.getElementById("view5").style.display = "none"
    document.getElementById("view6").style.display = "none"
    document.getElementById("view7").style.display = "flex"
    document.getElementById("view8").style.display = "none"
}
function ViewEighth () {
    document.getElementById("view5").style.display = "none"
    document.getElementById("view6").style.display = "none"
    document.getElementById("view7").style.display = "none"
    document.getElementById("view8").style.display = "flex"
}



function ViewNinth () {
    document.getElementById("view9").style.display = "flex"
    document.getElementById("view10").style.display = "none"
    document.getElementById("view11").style.display = "none"
    document.getElementById("view12").style.display = "none"
}

function ViewTenth () {
    document.getElementById("view9").style.display = "none"
    document.getElementById("view10").style.display = "flex"
    document.getElementById("view11").style.display = "none"
    document.getElementById("view12").style.display = "none"
}
function ViewEleventh  () {
    document.getElementById("view9").style.display = "none"
    document.getElementById("view10").style.display = "none"
    document.getElementById("view11").style.display = "flex"
    document.getElementById("view12").style.display = "none"
}
function ViewTweelth () {
    document.getElementById("view9").style.display = "none"
    document.getElementById("view10").style.display = "none"
    document.getElementById("view11").style.display = "none"
    document.getElementById("view12").style.display = "flex"
}