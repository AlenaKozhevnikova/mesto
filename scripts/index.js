const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

function openPopup() {
  popup.classList.add('popup_open')
}

function closePopup() {
  popup.classList.remove('popup_open')
}

editButton.addEventListener('click', function() {
  openPopup()
  nameFieldElement.value = profileName.textContent;
  descriptionFieldElement.value = profileDescription.textContent;
})

closeButton.addEventListener('click', function() {
  closePopup()
})

const nameFieldElement = document.querySelector('.popup__input_name')
const descriptionFieldElement = document.querySelector('.popup__input_description')

function formSubmitHandler (evt) {
  evt.preventDefault();
    profileName.textContent = nameFieldElement.value;
    profileDescription.textContent = descriptionFieldElement.value;
    closePopup()
}

