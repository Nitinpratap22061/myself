let Btn = document.getElementById("Btn")
let hide = document.querySelectorAll("#hide")
console.log(hide)
function showless(e) {
    e.preventDefault();
    for (i = 0; i < hide.length; i++) {
        hide[i].classList.remove("show")
    }
    Btn.innerText = "See More"
Btn.addEventListener("click", showmore)

}

function showmore(e) {
    e.preventDefault();
    for (i = 0; i < hide.length; i++) {
        hide[i].classList.add("show")
    }
    Btn.innerText = "Show-Less";
    
    
    Btn.addEventListener("click", showless)
}
Btn.addEventListener("click", showmore)