'use strict';

(function () {

  var similarWizardContainer = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var firstNames = [
    'Иван ',
    'Хуан Себастьян ',
    'Мария ',
    'Кристоф ',
    'Виктор ',
    'Юлия ',
    'Люпита ',
    'Вашингтон '
  ];

  var lastNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  similarWizardContainer.classList.remove('hidden');

  var getRandomElemFromArray = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var getRandomWizards = function (numberOfWizards) {
    var randomWizards = [];
    for (var i = 0; i < numberOfWizards; i++) {
      randomWizards.push({
        name: getRandomElemFromArray(firstNames) + ' ' + getRandomElemFromArray(lastNames),
        coatColor: getRandomElemFromArray(coatColors),
        eyesColors: getRandomElemFromArray(eyesColors)
      });
    }
    return randomWizards;
  };

  var wizards = getRandomWizards(4);
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;
    return wizardElement;
  };

  for (var i = 0; i < wizards.length; i++) {
    similarList.appendChild(createWizardElement(wizards[i]));
  }

  // настройка изменения цвета по нажатию
  var setupPlayer = document.querySelector('.setup-player');
  var inputFirst = setupPlayer.querySelector('input');
  var inputLast = setupPlayer.querySelector('input:last-child');
  var fireBallInput = setupPlayer.querySelector('.setup-fireball-wrap input');

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireBall = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var colorCoat = getRandomElemFromArray(coatColors);
    wizardCoat.style.fill = colorCoat;
    inputFirst.value = colorCoat;
  });

  wizardEyes.addEventListener('click', function () {
    var colorEyes = getRandomElemFromArray(eyesColors);
    wizardEyes.style.fill = colorEyes;
    inputLast.value = colorEyes;
  });

  fireBall.addEventListener('click', function () {
    var colorFireball = getRandomElemFromArray(fireballColors);
    fireBall.style.background = colorFireball;
    fireBallInput.value = colorFireball;
  });

})();
