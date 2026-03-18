const game = {
  score: 0,
  animals: [],
  currentQuestion: null,

  generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    let answer;
    switch (operation) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
    }
    this.currentQuestion = { operation, num1, num2, answer };
    document.getElementById('question').textContent = `${num1} ${operation} ${num2}`;
    return answer;
  },

  checkAnswer(userAnswer) {
    if (userAnswer === this.currentQuestion.answer) {
      alert('Richtig!');
      this.score += 10;
      updateScore(this.score);
      this.buyAnimal(this.getAffordableAnimal());
    } else {
      alert('Leider falsch. Versuche es noch einmal!');
    }
    this.generateQuestion();
  },

  buyAnimal(animal) {
    if (this.score >= animal.price) {
      this.score -= animal.price;
      updateScore(this.score);
      this.animals.push(animal);
      addAnimalToFarm(animal);
    } else {
      alert(`Du hast noch nicht genug Punkte, um ein ${animal.name} zu kaufen.`);
    }
  },

  getAffordableAnimal() {
    const animals = [
      { name: 'Braunes Pferd', price: 10 },
      { name: 'Schwarzes Pferd', price: 20 },
      { name: 'Weißes Pferd', price: 30 },
      { name: 'Einhorn', price: 50 }
    ];
    for (const animal of animals) {
      if (this.score >= animal.price) {
        return animal;
      }
    }
    return null;
  },

  start() {
    const answer = this.generateQuestion();
    const answerButtons = ['answer1', 'answer2', 'answer3', 'answer4'];
    answerButtons.forEach((buttonId) => {
      const button = createButton(
        answerButtons[Math.floor(Math.random() * answerButtons.length)],
        () => this.checkAnswer(parseInt(buttonId.slice(-1)))
      );
      document.getElementById('answers').appendChild(button);
    });
  }
};

game.start();
