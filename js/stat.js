
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 20;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}



window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, '#ffffff');

  ctx.fillStyle = '#000';
  ctx.font = "16px Pt Mono"

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', 130, 60);

  ctx.fillText('Вы', 130, 250);
  // ctx.fillRect(100, 200, 300, 20)

  ctx.fillText('Иван', 180, 250);
  // ctx.fillRect(100, 240, 300, 20)

  ctx.fillText('Ярослав', 230, 250);
  // ctx.fillRect(100, 280, 300, 20)
};


