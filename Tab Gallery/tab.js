function myFunction(x){
    var expandImg = document.getElementById("expandedImg");
    var imgtext = document.getElementById("imgText");

    expandImg.src = x.src;
    imgtext = x.alt;
    expandImg.parentElement.style.display = "block"; 
}