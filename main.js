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


function ViewThirteenth () {
    document.getElementById("view13").style.display = "flex"
    document.getElementById("view14").style.display = "none"
    document.getElementById("view15").style.display = "none"
    document.getElementById("view16").style.display = "none"
}

function Viewfourteenth () {
    document.getElementById("view13").style.display = "none"
    document.getElementById("view14").style.display = "flex"
    document.getElementById("view15").style.display = "none"
    document.getElementById("view16").style.display = "none"
}
function ViewFifteenth  () {
    document.getElementById("view13").style.display = "none"
    document.getElementById("view14").style.display = "none"
    document.getElementById("view15").style.display = "flex"
    document.getElementById("view16").style.display = "none"
}
function ViewSixtheenth () {
    document.getElementById("view13").style.display = "none"
    document.getElementById("view14").style.display = "none"
    document.getElementById("view15").style.display = "none"
    document.getElementById("view16").style.display = "flex"
}


function ViewSeventeenth () {
    document.getElementById("view17").style.display = "flex"
    document.getElementById("view18").style.display = "none"
    document.getElementById("view19").style.display = "none"
    document.getElementById("view20").style.display = "none"
}

function ViewEightheenth () {
    document.getElementById("view17").style.display = "none"
    document.getElementById("view18").style.display = "flex"
    document.getElementById("view19").style.display = "none"
    document.getElementById("view20").style.display = "none"
}
function ViewNinetheenth  () {
    document.getElementById("view17").style.display = "none"
    document.getElementById("view18").style.display = "none"
    document.getElementById("view19").style.display = "flex"
    document.getElementById("view20").style.display = "none"
}
function ViewTwentyth () {
    document.getElementById("view17").style.display = "none"
    document.getElementById("view18").style.display = "none"
    document.getElementById("view19").style.display = "none"
    document.getElementById("view20").style.display = "flex"
}

function ViewTwentyOneth () {
    document.getElementById("view21").style.display = "flex"
    document.getElementById("view22").style.display = "none"
    document.getElementById("view23").style.display = "none"
    document.getElementById("view24").style.display = "none"
}

function ViewTwentyTwoth () {
    document.getElementById("view21").style.display = "none"
    document.getElementById("view22").style.display = "flex"
    document.getElementById("view23").style.display = "none"
    document.getElementById("view24").style.display = "none"
}
function ViewTwentyThreeth  () {
    document.getElementById("view21").style.display = "none"
    document.getElementById("view22").style.display = "none"
    document.getElementById("view23").style.display = "flex"
    document.getElementById("view24").style.display = "none"
}
function ViewTwentyFourth () {
    document.getElementById("view21").style.display = "none"
    document.getElementById("view22").style.display = "none"
    document.getElementById("view23").style.display = "none"
    document.getElementById("view24").style.display = "flex"
}