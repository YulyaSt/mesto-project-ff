import '../pages/index.css';
import { createCard, addLikeCard } from './card.js';
import { openModal, closeModal } from './modal.js';
import { enableValidation, clearValidation } from './validation.js';
import { getInfoProfile, getInitialCards, editProfileInfo, addNewCard, updateAvatarUser, deleteUserCard } from './api.js';


const cardsContainer = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAvatar = document.querySelector('.popup_type_avatar');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupCloseButtons = document.querySelectorAll('.popup__close');

const formProfile = popupEdit.querySelector('.popup__form');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');

const profileTitle = document.querySelector('.profile__title');
const profileDscription = document.querySelector('.profile__description');

const popupImages = document.querySelector('.popup_type_image');
const popupImageLink = popupImages.querySelector('.popup__image');
const popupImageName = popupImages.querySelector('.popup__caption');

const newCard = document.forms['new-place'];
const imageName = newCard['place-name'];
const imageLink = newCard.link;

const profileAvatar = document.querySelector('.profile__image');
const formAvatar = popupAvatar.querySelector('.popup__form');
const inputAvaUrl = formAvatar.querySelector('.popup__input_type_url');

const popupDeleteCard = document.querySelector('.popup_type_delete-image');
const formDelete = popupDeleteCard.querySelector('.popup__form');

let submitButton = null;
let cardToDelete = null;
let elementCardToDelete = null;


const  validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


// загрузка данных
function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
};


// открытие модального окна картинки
function openPopupImage(imageURL, imageAlt, title) {
    popupImageLink.src = imageURL;
    popupImageLink.alt = imageAlt;
    popupImageName.textContent = title;
    openModal(popupImages);
};


// открытие модального окна редактирования профиля (карандаш)
profileEditButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  openModal(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDscription.textContent;
  clearValidation(popupEdit, validationConfig);
});


// редактирование данных профиля в модальном окне
function processProfileSubmit(evt) {
  evt.preventDefault();

  submitButton = formProfile.querySelector('.popup__button');
  renderLoading(true, submitButton);

  editProfileInfo({
    name: nameInput.value,
    about: jobInput.value,
  })
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDscription.textContent = res.about;

      closeModal(popupEdit);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      renderLoading(false, submitButton);
    })
};


// сохранение отредактированных данных в профиле
formProfile.addEventListener('submit', processProfileSubmit);


// модальное окно изменения аватара
profileAvatar.addEventListener('click', (evt) => {
  evt.preventDefault();

  openModal(popupAvatar);
  clearValidation(popupAvatar, validationConfig);
});


// установка аватара в модальном окне
function processAvatarSubmit(evt) {
  evt.preventDefault();

  submitButton = formAvatar.querySelector('.popup__button');
  renderLoading(true, submitButton);
  
  updateAvatarUser(inputAvaUrl.value)
    .then((res) => {
      profileAvatar.style.backgroundImage = `url(${res.avatar})`

      closeModal(popupAvatar)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      renderLoading(false, submitButton);
    })
};


formAvatar.addEventListener('submit', processAvatarSubmit);


// открытие модального окна добавления картинки (+)
addButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  openModal(popupNewCard);
  clearValidation(popupNewCard, validationConfig);
});


// получаем новую картинку в список картинок
 function processNewCardSubmit(evt) {
  evt.preventDefault();

  submitButton = newCard.querySelector('.popup__button');
  const newCardObject = {
    name: imageName.value,
    link: imageLink.value,
  }

  renderLoading(true, submitButton);

  addNewCard(newCardObject)
    .then((res) => {
      cardsContainer.prepend(createCard(
        res, 
        res.owner._id, 
        openPopupImage,
        deleteCardPopup,
        addLikeCard,
      ));
      
      closeModal(popupNewCard);
      newCard.reset();
    })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    renderLoading(false, submitButton);
  })
};


newCard.addEventListener('submit', processNewCardSubmit);


// Открытие модального окна удаления карточки
function deleteCardPopup(cardId, cardElement) {
  openModal(popupDeleteCard);
  cardToDelete = cardId;
  elementCardToDelete = cardElement;
}


// Удаление карточки после подтверждения 
function processDeleteCardSubmit(evt){
  evt.preventDefault();

  deleteUserCard(cardToDelete)
    .then(() => {
      elementCardToDelete.remove();
      closeModal(popupDeleteCard);
    })
    .catch(error => {
      console.error(error);
    });
};


formDelete.addEventListener("submit", processDeleteCardSubmit);


// закрытие модальных окон (All)
popupCloseButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const popupToClose = item.closest('.popup');
    closeModal(popupToClose);
  });
});


Promise.all([getInfoProfile(), getInitialCards()])
  .then(([user, newCard]) => {
    profileTitle.textContent = user.name;
    profileDscription.textContent = user.about;
    profileAvatar.style.backgroundImage = `url(${user.avatar})`;
    newCard.forEach((cardData) => {
      cardsContainer.append(
        createCard(cardData, user._id, openPopupImage, deleteCardPopup, addLikeCard));
      });
  })
  .catch((error) => {
    console.log(error);
  });


enableValidation(validationConfig);
