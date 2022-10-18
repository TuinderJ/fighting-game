const keysPressed = [];

document.addEventListener("keydown", event => {
  const key = event.key;
  if (!keysPressed.includes(key)) keysPressed.unshift(key);
});

document.addEventListener("keyup", event => {
  const key = event.key;
  const index = keysPressed.indexOf(key);
  if (index > -1) keysPressed.splice(index, 1);
});
