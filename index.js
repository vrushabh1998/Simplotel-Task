// Responsive sideBar
const sideBar = document.getElementById("sideBar");
const closeBar = document.getElementById("closeBar");
const navBar = document.getElementById("navBar");

if (sideBar) {
  sideBar.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}
if (closeBar) {
  closeBar.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}
