let cursor;
let targetX = 0,
  targetY = 0;
let currentX = 0,
  currentY = 0;
let scale = 1;
let isLoopRunning = false;

const HALF_OF_CURSOR = 6;
const LERP_FACTOR = 0.15;

function updateCursor() {
  currentX += (targetX - currentX) * LERP_FACTOR;
  currentY += (targetY - currentY) * LERP_FACTOR;
  if (cursor) {
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
  }
  requestAnimationFrame(updateCursor);
}

document.addEventListener("astro:page-load", () => {
  const isDesktop = matchMedia("(pointer: fine)").matches;
  if (!isDesktop) return;

  document.documentElement.classList.add("has-custom-cursor");

  cursor = document.getElementById("cursor");

  if (!isLoopRunning) {
    updateCursor();
    isLoopRunning = true;
  }
});

window.addEventListener("mousemove", (e) => {
  targetX = e.clientX - HALF_OF_CURSOR;
  targetY = e.clientY - HALF_OF_CURSOR;
  if (cursor) cursor.style.opacity = "1";
});

document.addEventListener("mouseover", (e) => {
  if (e.target instanceof Element && e.target.closest("a, button")) {
    scale = 1.8;
  } else {
    scale = 1;
  }
});
