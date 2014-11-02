$(function() {
    $('.row').on('click', '#savebutton', function() {
      chrome.tabs.executeScript(null, {file: 'GridTile.js'},function(){
        chrome.tabs.executeScript(null, {file: 'saveFunction.js'});});
    });
      

    $('.row').on('click', '#loadbutton', function(event) {
      chrome.tabs.executeScript(null,{file: 'GridTile.js'}, function() {
        chrome.tabs.executeScript(null, {file: 'loadFunction.js'});});
    });

});
