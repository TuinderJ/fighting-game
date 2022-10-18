class Map {
  constructor(obj) {
    this.image = new Image();
    this.image.src = obj.src;
  }

  draw() {
    c.drawImage(this.image, 0, 0, canvas.width, canvas.height);
  }

  update() {
    this.draw();
  }
}
