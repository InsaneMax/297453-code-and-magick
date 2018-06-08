'use strict';

var BLOCK_WIDTH = 420;
var BLOCK_HEIGHT = 270;
var BLOCK_X = 110;
var BLOCK_Y = 20;
var GAP = 10;

var renderBlock = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x - GAP, y - GAP, BLOCK_WIDTH, BLOCK_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  var FONT_GAP = 15;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var TEXT_WIDTH = 80;
  var maxTime = Math.max(times);
  var barValue = times[i] * BAR_HEIGHT /maxTime;

  renderBlock(ctx, BLOCK_X, BLOCK_Y, 'rgba(0, 0, 0, 0.7)');

  ctx.fillText('Ура вы победили!', BLOCK_X + GAP, BLOCK_Y + GAP * 2);
  ctx.fillText('Список результатов:', BLOCK_X + GAP, BLOCK_Y + FONT_GAP + GAP * 3);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'blue';
    }
  ctx.fillText(names[i], BLOCK_X + GAP * (TEXT_WIDTH + GAP) * i , BLOCK_HEIGHT - GAP);
  ctx.fillRect(BLOCK_X + GAP + (BAR_WIDTH + BAR_GAP) * i, (GAP * 3) + FONT_GAP * 2 + BLOCK_Y, BAR_WIDTH, BAR_HEIGHT);
  }

  // ctx.fillText(names[0], BLOCK_X + GAP, BLOCK_HEIGHT - GAP);
  // ctx.fillRect(BLOCK_X + GAP, (GAP * 3) + FONT_GAP * 2 + BLOCK_Y, BAR_WIDTH, BAR_HEIGHT);

  // ctx.fillText(names[1], BLOCK_X + GAP + TEXT_WIDTH + GAP, BLOCK_HEIGHT - GAP);
  // ctx.fillRect(BLOCK_X + GAP + BAR_WIDTH + BAR_GAP, (GAP * 3) + FONT_GAP * 2 + BLOCK_Y, BAR_WIDTH, BAR_HEIGHT);

  // ctx.fillText(names[2], BLOCK_X + GAP + (TEXT_WIDTH + GAP) * 2, BLOCK_HEIGHT - GAP);
  // ctx.fillRect(BLOCK_X + GAP + (BAR_WIDTH + BAR_GAP) * 2, (GAP * 3) + FONT_GAP * 2 + BLOCK_Y, BAR_WIDTH, BAR_HEIGHT);

  // ctx.fillText(names[3], BLOCK_X + GAP + (TEXT_WIDTH + GAP) * 3, BLOCK_HEIGHT - GAP);
  // ctx.fillRect(BLOCK_X + GAP + (BAR_WIDTH + BAR_GAP) * 3, (GAP * 3) + FONT_GAP * 2 + BLOCK_Y, BAR_WIDTH, BAR_HEIGHT);
};


