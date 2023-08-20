const cursorFollower = document.querySelector("#cursor-follower");
const ballRadius = 6;

document.addEventListener("mousemove", (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  const ballX = cursorX - ballRadius;
  const ballY = cursorY - ballRadius;

  cursorFollower.style.transform = `translate(${ballX}px, ${ballY}px)`;
});
