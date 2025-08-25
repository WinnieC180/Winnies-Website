const nav = document.getElementById("herosection");
const links = document.querySelectorAll(".link");
const star = document.getElementById("star");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    star.classList.add("scrolled");
    links.forEach(link => link.classList.add("scrolled"));
  } else {
    nav.classList.remove("scrolled");
    star.classList.remove("scrolled");
    links.forEach(link => link.classList.remove("scrolled"));
  }
});

const sections = document.querySelectorAll(".tab");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const active = document.querySelector(`nav .link[href="#${id}"]`);

            // position of the active link
            const linkRect = active.getBoundingClientRect(); 
            const navRect = active.closest("nav").getBoundingClientRect(); 

            const starLeft = linkRect.left - navRect.left + (linkRect.width / 2) - (star.offsetWidth / 2);
            star.style.left = starLeft + "px";
        }
    });
}, {threshold: 0.35});

sections.forEach(section => observer.observe(section));