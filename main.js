var count =(function () {
var counter = 1;
return function () {return counter+=1}
})();

function genClick(){
    document.getElementById("num").innerHTML = count();
    let image = document.getElementById("design");
        image.src = "img/test_img.png";
}

var imgObj = null;

function init(){
    imgObj = document.getElementById('shirt_group');
    imgObj.style.position= 'relative';
    imgObj.style.top = '0px';
    document.getElementById("form").style.display="none";
}   

function buyClick(){
    imgObj.style.top = parseInt(imgObj.style.top) + 200 + 'px';
    document.getElementById("gen")
        .style.display = "none";
        document.getElementById("buy")
        .style.display = "none";
    document.getElementById("shirtnumtext").innerHTML="You have generated shirt no." + (count() - 1) + "."; 
    document.getElementById("form").style.display="block";
}
window.onload =init;