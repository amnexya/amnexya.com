let modal = document.getElementById("popup");
let link = document.getElementById("popupLink");
let closeBtn = document.getElementById("closeBtn");

link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block"; 
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
