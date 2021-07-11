function showDoc(){
    var SrcImage = document.getElementById("imgSrc");
    var DesImage = document.getElementById("desImg");
    var y = document.getElementById("resume");
    var x = document.getElementById("document");
    if (x.style.display ==="none"){
        x.style.display = "block";
        y.classList = "col-md-6";
        console.log(DesImage);
        DesImage.src = SrcImage.value;
    }
    else {
        x.style.display = "none";
        y.classList = "col-md-12";
    }
}