//All the Elements needed
          //use querySelectorAll for multiple way to open a modal- we just have one
      //open                                        //whats being targeted
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const openContactModalButtons = document.querySelectorAll('[data-modal-target]')
      //close
const closeModalButtons = document.querySelectorAll('[data-close-button]')

//Event Listeners

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  });
});

openContactModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.contact_modal')
    closeModal(modal)
  });
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  };
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  };