(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    // modalCheckbox: document.querySelector("[modal-form-checkbox]"),
    // submitModalBtn: document.querySelector("[modal-form-submit]"),
        
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  // refs.modalCheckbox.addEventListener('click', () => {
  //   refs.submitModalBtn.toggleAttribute('disabled');
  // })

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();