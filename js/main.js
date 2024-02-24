//------------------------Change copyright year------------------------//
var date = new Date();
if (date.getFullYear() > 2024) {
  document.querySelector("#copyright-year").innerText =
    " - " + date.getFullYear();
}
