export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalEsc);
  popup.addEventListener('mousedown', overlayClickModal);
};


export function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEsc);
  popup.removeEventListener('mousedown', overlayClickModal);
};


function closeModalEsc(evt) {
  if (evt.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_is-opened');
    closeModal(popupToClose);
  };
};


function overlayClickModal(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    closeModal(evt.target);
  };
};
