document.querySelectorAll(".profil").forEach(e => e.addEventListener("click", function (event) {
    let target = event.target;
    while (target.getAttribute("class") != "profil") {
        target = target.parentElement;
    }
    window.location.href = target.dataset.url;
}))
document.querySelectorAll(".article").forEach(e => e.addEventListener("click", function (event) {
    let target = event.target;
    while (target.getAttribute("class") != "article") {
        target = target.parentElement;
    }
    window.location.href = target.dataset.url;
}))
document.querySelectorAll(".suivant").forEach(e => e.addEventListener("click", function (event) {
    let target = event.target;
    while (target.getAttribute("class") != "suivant") {
        target = target.parentElement;
    }
    window.location.href = target.dataset.url;
}));