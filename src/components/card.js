export function createCard(cardData, deleteCard, openPopupImage, cardLikeActive) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const nameValue= cardData.name;
  const linkValue = cardData.link;

  cardTitle.textContent = nameValue;
  cardImage.src = linkValue;
  cardImage.alt = nameValue;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  cardImage.addEventListener('click', () => openPopupImage(cardData));
  
  cardLikeActive = cardLikeButton.addEventListener('click', () => {
    if (cardLikeButton.classList.contains('card__like-button')) {
      cardLikeButton.classList.toggle('card__like-button_is-active');
    };
  });

  return cardElement;
};


export function deleteCard(cardElement) {
  cardElement.remove();
};


/* export function addNewCard (evt, cardElement) {
  evt.preventDefault();
  const inputCardName = cardElement.querySelector('.popup__input_type_card-name');
  const inputCardUrl =  cardElement.querySelector('.popup__input_type_url');

  const addCard = 
  
  closeModal(addNewCard);
} */
