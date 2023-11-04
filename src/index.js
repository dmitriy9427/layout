import "./index.scss";

(function () {
  const modal = document.querySelector(".burger");
  const burgerBtn = document.querySelector(".header__burger");
  const closeBtn = document.querySelector(".burger__close");

  burgerBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  function openModal() {
    modal.style.display = "flex";

    burgerBtn.removeEventListener('"click', openModal);
  }

  function closeModal() {
    modal.style.display = "none";
  }
})();
