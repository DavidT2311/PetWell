const form = document.getElementById("register_form")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.reset();
    mostrarMensaje();
})

function mostrarMensaje() {
    var alert = document.getElementById("alert");
    var close = document.getElementById("close");
    var save = document.getElementById("save");

    if (alert.style.visibility === "hidden" || alert.style.visibility === "") {
        alert.style.visibility = "visible";
        close.style.visibility = "visible";
        save.style.visibility = "hidden";
    } else {
        alert.style.visibility = "hidden";
        close.style.visibility = "hidden";
        save.style.visibility = "visible";
    }
}