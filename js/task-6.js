
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; 

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    boxesContainer.appendChild(box);
  }
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = ''; 
});

