const canvas = document.querySelector(`canvas`);
const c = canvas.getContext("2d");
let gameIsOver;

const map = new Map({ src: `./assets/maps/first-map/map.png` });

const characters = [new Fighter({ fighter: `hero` }), new Fighter({ fighter: `villian` })];

// preload assets
const preloadAssets = () => {
  assets.forEach(asset => {
    const preloadImg = new Image();
    preloadImg.src = asset;
    c.drawImage(preloadImg, 0, 0);
  });
};

let timerCount = 30;
document.querySelector(`.timer`).textContent = timerCount;

const timer = setInterval(() => {
  timerCount--;
  document.querySelector(`.timer`).textContent = timerCount;
  if (timerCount === 0) {
    clearInterval(timer);
    gameIsOver = true;
    document.querySelector(`.game-over`).style.opacity = 1;
  }
}, 1000);

const animate = () => {
  const animation = window.requestAnimationFrame(animate);
  if (gameIsOver) cancelAnimationFrame(animation);
  framesPast++;
  c.clearRect(0, 0, canvas.width, canvas.height);
  preloadAssets();
  map.update();
  characters.forEach(character => character.update());
};

animate();
