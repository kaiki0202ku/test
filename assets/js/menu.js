const menuHook = document.querySelectorAll(
  ".siteHeader__gNaviBtn, .siteHeader__overlay"
);
function toggleClass() {
  menuHook[0].classList.toggle("is-gNaviBtn-active");
  document
    .getElementsByClassName("siteHeader__gNaviList")[0]
    .classList.toggle("is-gNavi-open");

  document
    .getElementsByClassName("siteHeader__overlay")[0]
    .classList.toggle("is-overlay-active");
  document
    .getElementsByTagName("body")[0]
    .classList.toggle("is-body-scroll-off");
}
menuHook[0].addEventListener("click", toggleClass);
menuHook[1].addEventListener("click", toggleClass);
