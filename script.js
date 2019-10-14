function setButtonColour(button, red, green, blue) {
  button.setAttribute('style', 'background-color: rgb(' + red +', ' + green +', ' + blue + ');');
}

function makeColourValue(){
  return Math.round(Math.random()*255);
}

function startGame() {
  let body = document.getElementsByTagName('body')[0];
  let answerMessage = document.getElementById('answer');
  let buttons = document.getElementsByClassName('colourButton');
  let answerButton = Math.round(Math.random() * (buttons.length-1));
  let heading = document.getElementById('colourValue');
  answerMessage.innerHTML = "";
  setButtonColour(body, 255, 255, 255);

  for (let i = 0; i < buttons.length; i++) {
    let red = makeColourValue();
    let green = makeColourValue();
    let blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }

    let answerRed = red;
    let answerGreen = green;
    let answerBlue = blue;

    buttons[i].addEventListener('click', function(){
      if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "Congrats!";
        setButtonColour(body, answerRed, answerGreen, answerBlue);

      } else {
        answerMessage.innerHTML = "You suck";
      }
    });
  }
}

startGame();
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', startGame);
