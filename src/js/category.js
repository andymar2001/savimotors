let modalCategory = document.getElementById("modal-category");
let modalVehiculo = document.getElementById("modal-vehiculo");

modalVehiculo.addEventListener("click", () => {
  modalCategory.classList.add("modal-category--active");
});

modalCategory.addEventListener("click", (e) => {
  if(e.target.id=='modal-category'){
    modalCategory.classList.remove('modal-category--active')
  }
});
