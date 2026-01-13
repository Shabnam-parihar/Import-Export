document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");

  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});

function toggleMenu(el) {
    el.classList.toggle('active');
}

function toggleMenu(el) {
    if (window.innerWidth <= 768) {
        el.classList.toggle('active');
    }
}

document.addEventListener('click', function(e) {
    document.querySelectorAll('.infofa').forEach(menu => {
        if (!menu.contains(e.target)) {
            menu.classList.remove('active');
        }
    });
});



