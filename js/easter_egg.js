// Easter Egg: SBOM reveal
const secretCode = ['s', 'b', 'o', 'm'];
let userInput = [];

document.addEventListener('keydown', (e) => {
  userInput.push(e.key.toLowerCase());
  userInput = userInput.slice(-secretCode.length);

  if (userInput.join('') === secretCode.join('')) {
    alert("Congratulations! You've discovered the secret: Software Bill of Materials (SBOM) is crucial for software supply chain security. Check out my paper: https://ieeexplore.ieee.org/document/10235318");
  }
});