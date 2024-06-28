import { cardsContainer, openPopupImage } from './index.js';


export function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  cardImage.addEventListener('click', () => openPopupImage(cardData));
  
  cardLikeButton.addEventListener('click', () => {
    if (cardLikeButton.classList.contains('card__like-button')) {
      cardLikeButton.classList.toggle('card__like-button_is-active');
    };
  });

  return cardElement;
};


export function deleteCard(cardElement) {
  cardElement.remove();
};


export function cardFormSubmit (cardElement) {
  const addCard = createCard(cardElement);
  cardsContainer.prepend(addCard);
};
