class Fighter extends Sprite {
  constructor(config) {
    super(config);
    this.maxHealth = 100;
    this.health = 100;
    this.strength = 5;
    this.velocityX = 0;
    this.velocityY = 0;
    this.speed = 3;
    this.fighter = config.fighter;
    this.healthBar = document.querySelector(`.${this.fighter}-current-health`);
    console.log(this.healthBar);
    this.x = fighters[this.fighter].x;
    this.y = fighters[this.fighter].y;
    this.xOffset = fighters[this.fighter].xOffset;
    this.yOffset = fighters[this.fighter].yOffset;
    this.width = fighters[this.fighter].width;
    this.height = fighters[this.fighter].height;
    this.leftKey = fighters[this.fighter].controls.left;
    this.rightKey = fighters[this.fighter].controls.right;
    this.jumpKey = fighters[this.fighter].controls.jump;
    this.attackKey = fighters[this.fighter].controls.attack;
    this.facing = fighters[this.fighter].facing;
    this.attackBoxWidth = fighters[this.fighter].attackBoxWidth;
    this.attackBoxHeight = 40;
    this.attackBoxStartX = 0;
    this.attackBoxStartY = 0;
    this.isAttacking = false;
    this.attackIsColliding = false;
    this.state = `idle`;
    this.isDead = false;
  }

  draw() {
    // c.fillRect(this.x, this.y, this.width, this.height);
    // this.attackIsColliding ? (c.fillStyle = `red`) : (c.fillStyle = `green`);
    // if (this.facing === `right`) {
    //   c.fillRect(this.attackBoxStartX, this.y, this.attackBoxWidth, this.attackBoxHeight);
    // } else {
    //   c.fillRect(this.attackBoxStartX, this.y, this.attackBoxWidth, this.attackBoxHeight);
    // }
    c.drawImage(this.image, this.currentFrame * this.frameSize, 0, this.frameSize, this.image.height, this.x + this.xOffset, this.y + this.yOffset, this.frameSize, this.image.height);
  }

  update() {
    // Handle keypresses
    if (keysPressed.includes(this.jumpKey) && this.feet === floor) this.velocityY = -4.5;

    this.velocityX = 0;
    if (keysPressed.includes(this.leftKey) && keysPressed.includes(this.rightKey)) {
      keysPressed.indexOf(this.leftKey) < keysPressed.indexOf(this.rightKey) ? this.moveLeft() : this.moveRight();
    } else {
      if (keysPressed.includes(this.leftKey)) this.moveLeft();
      if (keysPressed.includes(this.rightKey)) this.moveRight();
    }
    if (keysPressed.includes(this.attackKey) && !this.isAttacking && this.state !== `attack1`) {
      this.isAttacking = true;
      this.setState(`attack1`);
    }
    this.x += this.velocityX;

    // Handle gravity
    this.feet = this.y + this.height;
    if (this.feet + this.velocityY < floor) {
      this.velocityY += gravity;
    } else {
      this.velocityY = 0;
      this.y = floor - this.height;
    }
    this.y += this.velocityY;

    // Handle attackbox location
    if (this.facing === `right`) {
      this.attackBoxStartX = this.x + this.width;
    } else {
      this.attackBoxStartX = this.x - this.attackBoxWidth;
    }
    this.attackBoxStartY = this.y;

    this.checkForAttackCollision();

    // Handle state change
    this.changeState();

    this.draw();
  }

  moveLeft() {
    if (this.x > 0) this.velocityX -= this.speed;
  }

  moveRight() {
    if (this.x + this.width < canvas.width) this.velocityX += this.speed;
  }

  checkForAttackCollision() {
    //
    characters.forEach(character => {
      if (character === this) return;
      if (
        this.isAttacking &&
        this.attackBoxStartX < character.x + character.width &&
        this.attackBoxStartX + this.attackBoxWidth > character.x &&
        this.attackBoxStartY < character.y + character.height &&
        this.attackBoxStartY + this.attackBoxHeight > character.y
      ) {
        this.attackIsColliding = true;
        character.health -= this.strength;
        if (character.health < 0) character.health = 0;
        // console.log(character.healthBar);
        character.healthBar.style.width = `${(character.health / character.maxHealth) * 100}%`;
        // console.log(character.fighter, character.health);
        this.isAttacking = false;
      } else {
        this.attackIsColliding = false;
      }
    });
  }

  changeState() {
    // Iterate through frames
    if (!(framesPast % animationSpeed)) {
      if (this.currentFrame < this.frames - 1) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
        this.isAttacking = false;
        this.state = null;
      }
    }
    if (this.isAttacking || this.state === `attack1`) {
      if (this.state === `attack1`) return;
      return this.setState(`attack1`);
    }
    // Idle check
    if (this.velocityX === 0 && this.velocityY === 0) {
      if (this.state === `idle`) return;
      this.setState(`idle`);
    }
    // Run check
    if (this.velocityX && !this.velocityY) {
      if (this.state === `run`) return;
      this.setState(`run`);
    }
    // Jump check
    if (this.velocityY < 0) {
      if (this.state === `jump`) return;
      this.setState(`jump`);
    }
    // Fall check
    if (this.velocityY > 0) {
      if (this.state === `fall`) return;
      this.setState(`fall`);
    }
  }

  setState(state) {
    this.state = state;
    this.frames = fighters[this.fighter].states[this.state].frames;
    this.image.src = `${fighters[this.fighter].assetLocation}${fighters[this.fighter].states[this.state].src}`;
    this.frameSize = this.image.width / this.frames;
    this.frameStartX = fighters[this.fighter].states[this.state].frameStartX;
    this.frameStartY = fighters[this.fighter].states[this.state].frameStartY;
    this.currentFrame = 0;
  }
}
