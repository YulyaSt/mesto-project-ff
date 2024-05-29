const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;


function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const nameValue= cardData.name;
  const linkValue = cardData.link;

  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__image').src = linkValue;
  cardElement.querySelector('.card__image').alt = nameValue;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
};


function deleteCard(cardElement) {
  cardElement.remove();
};


initialCards.forEach(cardData => {
  cardsContainer.append(
    createCard(cardData, deleteCard)
  );
});
