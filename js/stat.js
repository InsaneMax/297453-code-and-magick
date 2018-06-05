
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 110;
var CLOUD_Y = 20;

var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP = 50;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
// var scaleHeight = CLOUD_HEIGHT - (GAP * 3) - (FONT_GAP * 2) - (GAP * 2) - (FONT_GAP * 1) - CLOUD_Y;

var TEXT_WIDTH = 80;

// var randomNumber = function() {
//   return  Math.random().toFixed(1);
// }

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}


window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = "16px Pt Mono"


  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP * 3);


  var playerIndex = 0;
  var playerName = 'Вы';

  ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

  var playerIndex = 1;
  var playerName = 'Иван';

  ctx.fillText('Иван', CLOUD_X + GAP + TEXT_WIDTH + GAP, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH + BAR_GAP, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

  var playerIndex = 2;
  var playerName = 'Лиза';

  ctx.fillText('Лиза', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 2, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP +  (BAR_WIDTH + BAR_GAP) * 2, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

  var playerIndex = 3;
  var playerName = 'Сергей';

  ctx.fillText('Сергей', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 3, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP +  (BAR_WIDTH + BAR_GAP) * 3, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

};


