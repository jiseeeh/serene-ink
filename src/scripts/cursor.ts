let cursor: HTMLElement | null = null;
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

let onMouseMove: ((e: MouseEvent) => void) | null = null;
let onMouseOver: ((e: MouseEvent) => void) | null = null;

// cleanup
document.addEventListener("astro:before-swap", () => {
  if (onMouseMove) {
    window.removeEventListener("mousemove", onMouseMove);
    onMouseMove = null;
  }
  if (onMouseOver) {
    document.removeEventListener("mouseover", onMouseOver);
    onMouseOver = null;
  }
});

document.addEventListener("astro:page-load", () => {
  const isDesktop = matchMedia("(pointer: fine)").matches;
  if (!isDesktop) return;

  document.documentElement.classList.add("has-custom-cursor");

  cursor = document.getElementById("cursor");

  if (!isLoopRunning) {
    updateCursor();
    isLoopRunning = true;
  }

  onMouseMove = (e) => {
    targetX = e.clientX - HALF_OF_CURSOR;
    targetY = e.clientY - HALF_OF_CURSOR;
    if (cursor) cursor.style.opacity = "1";
  };

  onMouseOver = (e) => {
    if (e.target instanceof Element && e.target.closest("a, button")) {
      scale = 1.8;
    } else {
      scale = 1;
    }
  };

  window.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseover", onMouseOver);
});
