const cursorFollower = document.querySelector('#cursor-follower');
const ballRadius = 6; // Adjust this to match the radius of your ball

document.addEventListener('mousemove', (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  // Calculate the position for the ball to be centered under the cursor
  const ballX = cursorX - ballRadius;
  const ballY = cursorY - ballRadius;

  cursorFollower.style.transform = `translate(${ballX}px, ${ballY}px)`;
});

