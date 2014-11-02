console.log('grid');
var xhr=null;
if (window.XMLHttpRequest)xhr=new XMLHttpRequest();
else if(window.ActiveXObject)
  try {xhr=new ActiveXObject("Msxml2.XMLHTTP");}
  catch(e){xhr=new ActiveXObject("Microsoft.XMLHTTP");}
xhr.open("GET","http://code.jquery.com/jquery-2.1.1.min.js",false);xhr.send("");eval(xhr.responseText);
function Grid(size) {
  this.size = size;
  this.cells = [];
  this.build();
}
Grid.prototype = {
  build: function() {
    for (var x = 0; x < this.size; x++) {
      var row = this.cells[x] = [];
      for (var y = 0; y < this.size; y++) {
        row.push(null);
      }
    }
  },
  insertTile: function(tile) {
    this.cells[tile.x][tile.y] = tile;
  }
}
function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.previousposition = null;
  this.mergedfrom       = null;
}


