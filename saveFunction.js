function getTile(elem,grid) {
  var xy = elem.attr('class').match(/tile-position-(\d)-(\d)/).slice(1);
  var position = {};
  position['x'] = Number(xy[0])-1;
  position['y'] = Number(xy[1])-1;
  var value = Number(elem.children().text());
  var tile = new Tile(position, value);
  grid.insertTile(tile);
}
function getGrid(grid) {
  $('.tile-container').children().each(function(){getTile($(this),grid)});
}
function getAll2048Data() {
  console.log('getall2048data');
  var score = $('.score-container').val();
  var grid  = new Grid(size=4);
  getGrid(grid);
  localStorage.score = JSON.stringify(score);
  localStorage.grid  = JSON.stringify(grid);
}
console.log('savefunc');
getAll2048Data();
