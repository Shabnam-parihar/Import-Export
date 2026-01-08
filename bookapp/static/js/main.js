function adjustMainPadding() {
  const header = document.getElementById("headertag");
  const main = document.querySelector("main.maintag");

  if (header && main) {
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = headerHeight + "px";
  }
}

window.addEventListener("load", adjustMainPadding);
window.addEventListener("resize", adjustMainPadding);
