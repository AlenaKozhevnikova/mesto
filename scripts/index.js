const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const nameFieldElement = document.querySelector('.popup__input_name')
const descriptionFieldElement = document.querySelector('.popup__input_description')

function openPopup(popupElement) {
  popup.classList.add('popup_open')
}

function closePopup(popupElement) {
  popup.classList.remove('popup_open')
}

editButton.addEventListener('click', function() {
  openPopup(popup)
  nameFieldElement.value = profileName.textContent;
  descriptionFieldElement.value = profileDescription.textContent;
})

closeButton.addEventListener('click', function() {
  closePopup(popup)
})

function formSubmitHandler (evt) {
  evt.preventDefault();
    profileName.textContent = nameFieldElement.value;
    profileDescription.textContent = descriptionFieldElement.value;
    closePopup(popup)
}

formElement.addEventListener('submit', formSubmitHandler);
