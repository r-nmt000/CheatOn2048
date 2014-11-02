function getTile(elem,grid) {
  var xy = elem.attr('class').match(/tile-position-(\d)-(\d)/).slice(1);
  var position = {};
  position['x'] = number(xy[0])-1;
  position['y'] = number(xy[1])-1;
  var value = number(elem.children().text());
  var tile = new Tile(position, value);
  grid.inserttile(tile);
}
function getGrid(grid) {
  $('.tile-container').children().each(function(){getTile($(this),grid)});
}
function getAll2048data() {
  console.log('getall2048data');
  var score = $('.score-container').val();
  var grid  = new Grid(size=4);
  getGrid(grid);
  localstorage.score = json.stringify(score);
  localstorage.grid  = json.stringify(grid);
}
console.log('savefunc');
getAll2048Data();
