const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content; 


function addElement(cardValue, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const nameValue= cardValue.name;
  const linkValue = cardValue.link;

  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__image').src = linkValue;

  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
};


function deleteCard(evt) {
  const delCard = evt.target.closest('.card');
  delCard.remove();
};


initialCards.forEach(cardValue => {
  placesList.append(
    addElement(cardValue, deleteCard)
  );
});
