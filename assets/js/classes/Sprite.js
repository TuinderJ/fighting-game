class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.frames = config.frames || 1;
    this.frameSize = this.image.width / this.frames;
    this.width = config.width || this.image.width;
    this.height = config.height || this.image.height;
    this.frameStartX = config.frameStartX || 0;
    this.frameStartY = config.frameStartY || 0;
    this.currentFrame = 0;
  }

  draw() {
    c.drawImage(this.image, this.frameStartX + this.currentFrame * this.frameSize, this.frameStartY, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  update() {
    // Handle frame animations
    if (!(framesPast % animationSpeed)) this.currentFrame < this.frames - 1 ? this.currentFrame++ : (this.currentFrame = 0);
    this.draw();
  }
}
