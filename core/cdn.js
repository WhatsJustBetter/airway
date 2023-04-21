var url = 'https://raw.githubusercontent.com/dashdash-studios/tw-airway/main/core/styles.css';
var style;
fetch(url).then(response => { response.text().then(text => { style = text }});
console.log(style);
