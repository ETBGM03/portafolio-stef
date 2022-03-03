// CODE FOR SET A NEW PROP IN CSS
let menu = document.querySelector("#menu");
// let ocultarDownloadCv = document.querySelector(".download-cv");
menuResponsive.addEventListener("click", () => {
  menu.classList.toggle("nav__menu--togle");
});
// CODE TO HIDE TH NAVBAR
let ocultarNavBar = document.querySelectorAll(".ocultarPrueba");
ocultarNavBar.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.remove("nav__menu--togle");
  });
})


// addEventListener("click", () => {
//   menu.classList.remove("nav__menu--togle");
// })

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
