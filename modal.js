(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  const modalRef = document.querySelector(".modal");
  function handler() {
    modalRef.classList.toggle("is-open");
  }

  function handler1() {
    modalRef.classList.remove("is-open");
  }

  refs.openModalBtn.addEventListener("click", handler);
  refs.closeModalBtn.addEventListener("click", handler1);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

const licenseRef = document.querySelector(".js-license");
const btnRef = document.querySelector(".js-button");

licenseRef.addEventListener("change", handleLicenseChange);
function handleLicenseChange(event) {
  btnRef.disabled = !event.target.checked;
}
