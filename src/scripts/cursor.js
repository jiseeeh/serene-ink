document.addEventListener("DOMContentLoaded", () => {
  const isDesktop = matchMedia("(pointer: fine)").matches;
  if (!isDesktop) return;

  const cursor = document.getElementById("cursor");
  const HALF_OF_CURSOR = 6;
  const LERP_FACTOR = 0.15; // higher value = slower movement

  let targetX = 0,
    targetY = 0;
  let currentX = 0,
    currentY = 0;
  let scale = 1;

  window.addEventListener("mousemove", (e) => {
    // to center the cursor on the mouse position
    targetX = e.clientX - HALF_OF_CURSOR;
    targetY = e.clientY - HALF_OF_CURSOR;
    if (cursor) cursor.style.opacity = "1";
  });

  document.addEventListener("mouseover", (e) => {
    if (!(e.target instanceof Element)) return;

    if (e.target.closest("a, button")) scale = 1.8;
    else scale = 1;
  });

  function loop() {
    currentX += (targetX - currentX) * LERP_FACTOR;
    currentY += (targetY - currentY) * LERP_FACTOR;

    if (cursor) {
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  window.addEventListener("mouseout", () => {
    if (cursor) cursor.style.opacity = "0";
  });
});
