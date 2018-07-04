'use strict';

// валидация

(function () {
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Вы должны ввести не менее 2 сивмолов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Вы должны ввести не более 25 символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Пожалуйста, заполните это поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
