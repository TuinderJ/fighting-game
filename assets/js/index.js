const canvas = document.querySelector(`canvas`);
const c = canvas.getContext("2d");

const map = new Map({ src: `./assets/maps/first-map/map.png` });

const characters = [];
const hero = new Fighter({ fighter: `hero` });
const villian = new Fighter({ fighter: `villian` });
characters.push(hero);
characters.push(villian);

// preload assets
const preloadAssets = () => {
  assets.forEach(asset => {
    const preloadImg = new Image();
    preloadImg.src = asset;
    c.drawImage(preloadImg, 0, 0);
  });
};

const animate = () => {
  window.requestAnimationFrame(animate);
  framesPast++;
  c.clearRect(0, 0, canvas.width, canvas.height);
  preloadAssets();
  map.update();
  characters.forEach(character => {
    character.update();
  });
};

animate();
