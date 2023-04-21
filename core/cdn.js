loaded = true

document.onready = function() {
  var style;
  fetch('https://raw.githubusercontent.com/dashdash-studios/tw-airway/main/core/styles.css').then(r=>{r.text().then(t=>{style=t})});
  console.log(style);
}
