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

const formProfile = popupEdit.querySelector('.popup__form');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');

const formCard = popupNewCard.querySelector('.popup__form');
const inputCardName = formCard.querySelector('.popup__input_type_card-name');
const inputCardUrl =  formCard.querySelector('.popup__input_type_url');

const profileTitle = document.querySelector('.profile__title');
const profileDscription = document.querySelector('.profile__description');

const popupImages = document.querySelector('.popup_type_image');
const imageLink = popupImages.querySelector('.popup__image');
const imageName = popupImages.querySelector('.popup__caption');


// весь список картинок
initialCards.forEach((cardData) => {
  cardsContainer.prepend(
  createCard(cardData, deleteCard, openPopupImage));
});


// открытие модального окна картинки
function openPopupImage(cardData) {
  openModal(popupImages);
  imageLink.src = cardData.link;
  imageLink.alt = cardData.name;
  imageName.textContent = cardData.name;
};


// открытие модального окна редактирования профиля (карандаш)
profileEditButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDscription.textContent;
});


// редактирование данных профиля в модальном окне
function processProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDscription.textContent = jobInput.value;
  closeModal(popupEdit);
};


// сохранение отредактированных данных в профиле
formProfile.addEventListener('submit', processProfileSubmit);


// открытие модального окна добавления картинки (+)
addButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(popupNewCard);
});


// получаем новоую картинку в список картинок
formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const addCard = createCard({
    name: inputCardName.value,
    link: inputCardUrl.value
  }, deleteCard, openPopupImage);
  cardsContainer.prepend(addCard);
  closeModal(popupNewCard);
});


// закрытие модальных окон (All)
popupCloseButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const popupToClose = item.closest('.popup');
    closeModal(popupToClose);
  });
});
