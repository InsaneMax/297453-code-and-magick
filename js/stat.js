'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x - GAP, y - GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxOfArray = function (nameOfArray) {
  return Math.max.apply(null, nameOfArray);
};

window.renderStatistics = function (ctx, names, times) {
  var FONT_GAP = 15;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var TEXT_WIDTH = 80;
  var barY = CLOUD_HEIGHT - GAP * 4 - FONT_GAP * 3;
  var maxValue = getMaxOfArray(times);
  var randomNumber = Math.floor(Math.random() * 255);

  var getRandomBlue = function () {
    return 'rgb(' + '0, 0, ' + randomNumber + ')';
  };

  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 4, CLOUD_Y + FONT_GAP + GAP * 3);

  for (var i = 0; i < names.length; i++) {
    times[i] = Math.floor(times[i]);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = getRandomBlue();
    }
    ctx.fillText(names[i], CLOUD_X + GAP * 3 + (TEXT_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP * 3 + (BAR_WIDTH + BAR_GAP) * i, (GAP * 3) + FONT_GAP * 2 + barY, BAR_WIDTH, BAR_HEIGHT * times[i] * -1 / maxValue);
    ctx.fillText(times[i], CLOUD_X + GAP * 3 + (TEXT_WIDTH + GAP) * i, (BAR_HEIGHT * times[i] * -1 / maxValue) + barY + FONT_GAP * 2 + GAP * 2);
  }
};
