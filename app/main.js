require('./styles.css');
var elem = () => {
  var element = document.createElement('h1');
  element.innerHTML = 'React Webpack Starter';
  return element;
}

var app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(elem());
