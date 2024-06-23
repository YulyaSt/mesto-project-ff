import '../pages/index.css';
import { initialCards } from './cards.js';
import { createCard, deleteCard } from './card.js';
import { openModal, closeModal } from './modal.js';


const cardsContainer = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupCloseButtons = document.querySelectorAll('.popup__close');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

const profileTitle = document.querySelector('.profile__title');
const profileDscription = document.querySelector('.profile__description');

const popupImages = document.querySelector('.popup_type_image');
const imageLink = popupImages.querySelector('.popup__image');
const imageName = popupImages.querySelector('.popup__caption');


initialCards.forEach((cardData) => {
  cardsContainer.append(
    createCard(cardData, deleteCard, openPopupImage)
  );
});


function openPopupImage(cardData) {
  openModal(popupImages);
  imageLink.src = cardData.link;
  imageLink.alt = cardData.name;
  imageName.textContent = cardData.name;
};


profileEditButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDscription.textContent;
});


addButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(popupNewCard);
})


popupCloseButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const close = item.closest('.popup');
    closeModal(close);
  });
});


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDscription.textContent = jobInput.value;
  closeModal(popupEdit);
};


formElement.addEventListener('submit', handleFormSubmit);


// formElement.addEventListener('submit', addNewCard);
