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

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
});


