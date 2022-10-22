let framesPast = 0;
const gravity = 0.15;
const floor = 127;
const animationSpeed = 5;

const fighters = {
  hero: {
    assetLocation: `./assets/fighters/hero/`,
    states: {
      idle: {
        src: `Idle.png`,
        frames: 8,
        frameStartX: 76,
        frameStartY: 65,
      },
      jump: {
        src: `Jump.png`,
        frames: 2,
        frameStartX: 76,
        frameStartY: 65,
      },
      run: {
        src: `Run.png`,
        frames: 8,
        frameStartX: 76,
        frameStartY: 65,
      },
      fall: {
        src: `Fall.png`,
        frames: 2,
        frameStartX: 76,
        frameStartY: 65,
      },
      takeHit: {
        src: `Take Hit.png`,
        frames: 4,
        frameStartX: 76,
        frameStartY: 65,
      },
      attack1: {
        src: `Attack1.png`,
        frames: 6,
        frameStartX: 76,
        frameStartY: 65,
      },
      death: {
        src: `Death.png`,
        frames: 6,
        frameStartX: 76,
        frameStartY: 65,
      },
    },
    controls: {
      jump: `w`,
      left: `a`,
      right: `d`,
      attack: `s`,
    },
    width: 37,
    height: 52,
    xOffset: -76,
    yOffset: -70,
    x: 0,
    y: 0,
    facing: `right`,
    attackBoxWidth: 76,
  },
  villian: {
    assetLocation: `./assets/fighters/villian/`,
    states: {
      idle: {
        src: `Idle.png`,
        frames: 4,
        frameStartX: 86,
        frameStartY: 74,
      },
      jump: {
        src: `Jump.png`,
        frames: 2,
        frameStartX: 78,
        frameStartY: 74,
      },
      run: {
        src: `Run.png`,
        frames: 8,
        frameStartX: 84,
        frameStartY: 70,
      },
      fall: {
        src: `Fall.png`,
        frames: 2,
        frameStartX: 80,
        frameStartY: 75,
      },
      takeHit: {
        src: `Take hit.png`,
        frames: 3,
        frameStartX: 86,
        frameStartY: 74,
      },
      attack1: {
        src: `Attack1.png`,
        frames: 4,
        frameStartX: 72,
        frameStartY: 74,
      },
      death: {
        src: `Death.png`,
        frames: 7,
        frameStartX: 38,
        frameStartY: 74,
      },
    },
    controls: {
      jump: `ArrowUp`,
      left: `ArrowLeft`,
      right: `ArrowRight`,
      attack: `ArrowDown`,
    },
    width: 33,
    height: 54,
    xOffset: -86,
    yOffset: -74,
    x: 267,
    y: 0,
    facing: `left`,
    attackBoxWidth: 69,
  },
};

const assets = [
  `./assets/fighters/hero/Attack1.png`,
  `./assets/fighters/hero/Attack2.png`,
  `./assets/fighters/hero/Death.png`,
  `./assets/fighters/hero/Fall.png`,
  `./assets/fighters/hero/Idle.png`,
  `./assets/fighters/hero/Jump.png`,
  `./assets/fighters/hero/Run.png`,
  `./assets/fighters/hero/Take Hit - white silhouette.png`,
  `./assets/fighters/hero/Take Hit.png`,
  `./assets/fighters/villian/Attack1.png`,
  `./assets/fighters/villian/Attack2.png`,
  `./assets/fighters/villian/Death.png`,
  `./assets/fighters/villian/Fall.png`,
  `./assets/fighters/villian/Idle.png`,
  `./assets/fighters/villian/Jump.png`,
  `./assets/fighters/villian/Run.png`,
  `./assets/fighters/villian/Take hit.png`,
];
