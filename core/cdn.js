var style;
fetch('https://raw.githubusercontent.com/dashdash-studios/tw-airway/main/core/styles.css').then(r=>{r.text().then(t=>{style=t})});
setTimeout(function(){
  console.log(style);
})
