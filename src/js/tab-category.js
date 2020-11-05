// Variables
let tabs = Array.from(document.querySelectorAll(".modal-category__tab"));
let panels = Array.from(document.querySelectorAll(".modal-category__grid"));

// Procesos
document.getElementById("tabs-category").addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-category__tab")) {
    let i = tabs.indexOf(e.target);
    tabs.map((tab) => tab.classList.remove("modal-category__tab--active"));
    tabs[i].classList.add("modal-category__tab--active");
    panels.map((panels) =>
      panels.classList.remove("modal-category__grid--active")
    );
    panels[i].classList.add("modal-category__grid--active");
  }
});
