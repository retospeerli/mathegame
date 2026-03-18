function createButton(text, onClick) {
  const button = document.createElement('button');
  button.classList.add('answer-button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

function updateScore(score) {
  document.getElementById('score').textContent = `Punkte: ${score}`;
}

function addAnimalToFarm(animal) {
  const animalIcon = document.createElement('img');
  animalIcon.src = `img/animals/${animal.name.toLowerCase().replace(' ', '-')}.png`;
  animalIcon.alt = animal.name;
  animalIcon.classList.add('animal-icon');
  document.getElementById('animals').appendChild(animalIcon);
}
