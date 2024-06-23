export function openModal(popup) {
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalEsc);
  document.addEventListener('mousedown', overlayClickModal);
}


export function closeModal(popup) {
  popup.classList.add('popup_is-animated');
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEsc);
  document.removeEventListener('mousedown', overlayClickModal);
}


function closeModalEsc(evt) {
  const close = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
    closeModal(close);
  }
}


function overlayClickModal(evt) {
  const close = document.querySelector('.popup_is-opened');
  if (evt.target === close) {
    closeModal(close);
  }
}
