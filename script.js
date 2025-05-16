let bio = document.getElementById("bio");
let bioContainer = document.getElementById("bio-container");
let bubbles = document.getElementsByClassName("bubble");

let colors = ["#d91e3d", "#FCDE35", "#2a8fc9", "#06AB53"];

let randomColor = colors[Math.floor(Math.random() * colors.length)];

    bioContainer.onmousemove = function(f){
        
        bubbles[bubbles.length-1].style.backgroundColor = randomColor;
        bubbles[bubbles.length-1].style.left = f.clientX - 10 + "px";
        bubbles[bubbles.length-1].style.top = f.clientY - 60 + "px";

    };

    bioContainer.addEventListener("click", function(e){
        bioContainer.innerHTML += "<div class = 'bubble'></div>";
        randomColor = colors[Math.floor(Math.random() * 4)];
        for(i = bubbles.length - 1; i<bubbles.length; i++){
            bubbles[i].style.left = e.clientX - 10 + "px";
            bubbles[i].style.top = e.clientY - 60 + "px";
            bubbles[i].style.backgroundColor = randomColor;
        }
    })




