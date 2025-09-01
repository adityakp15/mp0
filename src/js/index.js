window.changeColor = function(color) {
  document.querySelector('.box').style.backgroundColor = color;
}

const redButton = document.querySelector('.red');
redButton.addEventListener('click', () => window.changeColor('red'));

const blueButton = document.querySelector('.blue');
blueButton.addEventListener('click', () => changeColor('blue'));

const greyButton = document.querySelector('.grey');
greyButton.addEventListener('click', () => changeColor('grey'));