import { deleteUserCard, getLikesCard, deleteLikeCard } from './api.js';


const cardTemplate = document.querySelector('#card-template').content;


function createCard(cardData, userId, openPopupImage, deleteCard, addLikeCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardLikeValue = cardElement.querySelector('.card__like-value');
  const cardId = cardData._id;
  
  cardElement.dataset.cardId = cardData._id;
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardLikeValue.textContent = cardData.likes.length;
  

  if (cardData.likes.some((like) => like._id === userId)) {
    cardLikeButton.classList.add('card__like-button_is-active');
  };


  if (cardData.owner._id === userId) {
    deleteButton.classList.add('card__delete-button_active')
    deleteButton.addEventListener("click", function (evt) {
      const newCard = evt.target.closest('.card');
      deleteCard(newCard);
    }); 
  } else {
    deleteButton.remove();
  };
  

  cardLikeButton.addEventListener('click', (evt) =>  addLikeCard(evt, cardId, cardLikeValue));


  cardImage.addEventListener('click', () => openPopupImage);


  return cardElement;
};


function deleteCard (cardElement) {
  deleteUserCard(cardElement.dataset.cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((error) => {
      console.log(error);
    });
};


function addLikeCard (evt, cardId, cardLikeValue) {
  const like = evt.target.classList.contains("card__like-button_is-active") ? deleteLikeCard : getLikesCard;
  like(cardId) 
    .then((cardData) => {
      cardLikeValue.textContent = cardData.likes.length; 
      evt.target.classList.toggle("card__like-button_is-active");
    })
    .catch((error) => {
      console.log(error)
    });
  };


export { createCard, deleteCard, addLikeCard };
