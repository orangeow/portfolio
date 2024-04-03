let filterButtons = document.getElementsByClassName("filter-button");
let digitalFilter = document.getElementById("digital");
let typographyFilter = document.getElementById("typography");
let productFilter = document.getElementById("product-design");

let digitalProjects = document.getElementsByClassName("digital");
let typographyProjects = document.getElementsByClassName("typography");
let productProjects = document.getElementsByClassName("product-design");

let allProjects = [digitalProjects, typographyProjects, productProjects];

let digitalClicked = false;
let typeClicked = false;
let productClicked = false;

digitalFilter.addEventListener("click", function(){
    // if(digitalFilter.style.filter == "invert(0)"){
    //     digitalFilter.style.filter = "invert(1)";
    // } else if (digitalFilter.style.filter == "invert(1)"){
    //     digitalFilter.style.filter = "invert(0)";
    // }
    productFilter.style.filter = "invert(0)";
    typographyFilter.style.filter = "invert(0)";

    if (digitalClicked == false){
        digitalClicked = true;
        digitalFilter.style.filter = "invert(1)";

        for(let i=0;i<digitalProjects.length; i++){
            digitalProjects[i].style.display = "flex";
        }
        for(let i = 0; i<typographyProjects.length; i++){
            typographyProjects[i].style.display = "none";
        }
        for(let i = 0; i<productProjects.length; i++){
            productProjects[i].style.display = "none";
        }
    } else if (digitalClicked == true){
        digitalClicked = false;
        digitalFilter.style.filter = "invert(0)";

        for(let i=0;i<digitalProjects.length; i++){
            digitalProjects[i].style.display = "none";
        }

        for(let i = 0; i<allProjects.length; i++){
            for(let j = 0; j<allProjects[i].length; j++){
                if(allProjects[i][j].style.display == "none"){
                    allProjects[i][j].style.display = "flex";
                }
            }
        }
    }
    // digitalFilter.style.filter = "invert(1)";
    // if(typographyFilter.style.filter == "invert(1)"){
    //     digitalFilter.style.filter = "invert(0)";
    // }
    // if(productFilter.style.filter == "invert(1)"){
    //     digitalFilter.style.filter = "invert(0)";
    // }

    // digitalFilter.style.filter = "invert(1)";
    
})

typographyFilter.addEventListener("click", function(){
    digitalFilter.style.filter = "invert(0)";
    productFilter.style.filter = "invert(0)";

    if (typeClicked == false){
        typeClicked = true;
        typographyFilter.style.filter = "invert(1)";

        for(let i=0;i<typographyProjects.length; i++){
            typographyProjects[i].style.display = "flex";
        }
        for(let i = 0; i<digitalProjects.length; i++){
             digitalProjects[i].style.display = "none";
        }
        for(let i = 0; i<productProjects.length; i++){
            productProjects[i].style.display = "none";
        }
    } else if (typeClicked == true){
        typeClicked = false;
        typographyFilter.style.filter = "invert(0)";

        for(let i=0;i<typographyProjects.length; i++){
            typographyProjects[i].style.display = "none";
        }

        for(let i = 0; i<allProjects.length; i++){
            for(let j = 0; j<allProjects[i].length; j++){
                if(allProjects[i][j].style.display == "none"){
                    allProjects[i][j].style.display = "flex";
                }
            }
        }
    }
})

productFilter.addEventListener("click", function(){
    typographyFilter.style.filter = "invert(0)";
    digitalFilter.style.filter = "invert(0)";

    if (productClicked == false){
        productClicked = true;
        productFilter.style.filter = "invert(1)";

        for(let i=0;i<productProjects.length; i++){
            productProjects[i].style.display = "flex";
        }
        for(let i = 0; i<digitalProjects.length; i++){
             digitalProjects[i].style.display = "none";
        }
        for(let i = 0; i<typographyProjects.length; i++){
            typographyProjects[i].style.display = "none";
        }
    } else if (productClicked == true){
        productClicked = false;
        productFilter.style.filter = "invert(0)";

        for(let i=0;i<productProjects.length; i++){
            productProjects[i].style.display = "none";
        }

        for(let i = 0; i<allProjects.length; i++){
            for(let j = 0; j<allProjects[i].length; j++){
                if(allProjects[i][j].style.display == "none"){
                    allProjects[i][j].style.display = "flex";
                }
            }
        }
    }
})