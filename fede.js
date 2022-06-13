const modal = document.querySelector(".modal");
const trigger = document.querySelector("#popup");
const closeButton = document.querySelector(".close-button");

function ventanaNueva() {
    modal.classList.toggle("show-modal");
}

trigger.addEventListener("click", ventanaNueva);
closeButton.addEventListener("click", ventanaNueva);
