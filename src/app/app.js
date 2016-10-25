/* globals: document */
export class MyApp {
  constructor() {

  }
}

function el(id) {
  return document.getElementById(id);
}

el('app').innerHTML = require('./app.html');
var src = el('example-img').src;
el('info').innerHTML = 'Image src: ' + src;