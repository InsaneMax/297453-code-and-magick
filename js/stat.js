'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 20;

var renderBlock = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  var GAP = 10;
  var FONT_GAP = 15;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var TEXT_WIDTH = 80;
  renderBlock(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderBlock(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px Pt Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP * 3);

  ctx.fillText('Антон', CLOUD_X + GAP, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Иван', CLOUD_X + GAP + TEXT_WIDTH + GAP, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH + BAR_GAP, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Лиза', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 2, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 2, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Сергей', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 3, CLOUD_HEIGHT - GAP);
  ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 3, (GAP * 3) + FONT_GAP * 2 + CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);
};


