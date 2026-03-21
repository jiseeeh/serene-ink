document.addEventListener("DOMContentLoaded", () => {
  const isDesktop = matchMedia("(pointer: fine)").matches;
  if (!isDesktop) return;

  const cursor = document.getElementById("cursor");

  let targetX = 0,
    targetY = 0;
  let currentX = 0,
    currentY = 0;
  let scale = 1;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX - 6;
    targetY = e.clientY - 6;
    if (cursor) cursor.style.opacity = "1";
  });

  document.addEventListener("mouseover", (e) => {
    if (!(e.target instanceof Element)) return;

    if (e.target.closest("a, button")) scale = 1.8;
  });

  document.addEventListener("mouseout", (e) => {
    if (!(e.target instanceof Element)) return;

    if (e.target.closest("a, button")) scale = 1;
  });

  function loop() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;

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
