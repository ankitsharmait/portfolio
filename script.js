const menutoggle = document.getElementById("menu-toggle");
const navlinks = document.querySelector(".nav-links");
const menuIcon = menutoggle.querySelector("i");
menutoggle.addEventListener("click",(e)=>
   {
  e.stopPropagation();
  const isOpen = navlinks.classList.toggle("active");
  menutoggle.classList.toggle("active", isOpen);
  menutoggle.setAttribute("aria-expanded", isOpen);
  menuIcon.classList.toggle("fa-bars", !isOpen);
  menuIcon.classList.toggle("fa-xmark", isOpen);
});

