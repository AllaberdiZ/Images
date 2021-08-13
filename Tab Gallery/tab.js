function myFunction(x){
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");

    expandImg.src = x.src;
    imgText.innerHTML = x.alt;
    expandImg.parentElement.style.display = "block"; 
}
