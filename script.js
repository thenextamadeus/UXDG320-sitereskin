function sentOut(n) {
    var el = document.querySelectorAll('.cardImageDiv')[n];
    el.style.marginTop = "-250px";
    el.style.scale = "0.01"
    el.style.transform = "rotate(1080deg)"
    console.log(n)
}