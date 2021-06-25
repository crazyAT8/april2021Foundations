//All the Elements needed
          //use querySelectorAll for multiple way to open a modal- we just have one
      //open                                        //whats being targeted
const openResumeModalButtons = document.querySelectorAll('[data-modal-target]')
const openReferencesModalButtons = document.querySelectorAll('[data-modal-target]')
      //close
const closeModalButtons = document.querySelectorAll('[data-close-button]')
      //overlay- to show and hide when needed
const overlay = document.getElementById('overlay')


//Event Listeners

openResumeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    });
  });

openReferencesModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    });
  });
  
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.resumeModal')
      closeModal(modal)
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.referencesModal')
      closeModal(modal)
    });
  });
  
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.referencesModal.active')
    modals.forEach(modal => {
      closeModal(modal)
    });
  });

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.resumeModal.active')
    modals.forEach(modal => {
      closeModal(modal)
    });
  });

  
// Functions

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