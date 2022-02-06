// CODE FOR SET A NEW PROP IN CSS
let menu = document.querySelector("#menu");
let menuResponsive = document.querySelector("#menuResponsive");
let ocultarDownloadCv = document.querySelector(".download-cv");
menuResponsive.addEventListener("click", () => {
  menu.classList.toggle("nav__menu--togle");
  // ocultarDownloadCv.classList.toggle("ocultarBtn");
});

// CODE FOR SEND EMAIL A USER
let form = document.querySelector("#form-contact");
let mailto = document.querySelector("#trucazo");
form.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();
  let datos = new FormData(this);
  mailto.setAttribute(
    "href",
    `mailto:esfergo150618@gmail.com?subject=${datos.get("name")} ${datos.get(
      "email"
    )}&body=${datos.get("message")}`
  );
  mailto.click();
  form.reset();
}
