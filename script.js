// Show button click logic
document.getElementById('showButton').onclick = function () {
    const image = document.getElementById('bullseye');
    const text = document.getElementById('revealText');
    const psMessage = document.getElementById('psMessage');
    document.getElementById("welcomeBack").style.display = "block";
  
    image.classList.add('show');
    text.classList.add('show');
    psMessage.style.display = 'block';
  
    // Launch confetti on button click
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  };
  
  // Balloon popping & infinite creation
  
  const balloonColors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const balloonContainer = document.querySelector('.balloon-container');
  
  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
  
    // Random color class
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.classList.add(color);
  
    // Random horizontal position (0% to 95%)
    balloon.style.left = Math.random() * 95 + '%';
  
    // Random animation duration (10s to 15s)
    balloon.style.animationDuration = (10 + Math.random() * 5) + 's';
  
    balloonContainer.appendChild(balloon);
  
    // Remove balloon when animation ends to keep DOM clean
    balloon.addEventListener('animationend', () => {
      balloon.remove();
    });
  
    // Pop balloon on click
    balloon.addEventListener('click', () => {
      const rect = balloon.getBoundingClientRect();
      const x = (rect.left + rect.right) / 2 / window.innerWidth;
      const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
  
      balloon.remove();
  
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x, y: y }
      });
    });
  }
  
  // Create a balloon every 800ms
  setInterval(createBalloon, 1600);
  