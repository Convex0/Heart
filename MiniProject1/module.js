
// === Gradient Follows Cursor ===
const clock = document.querySelector(".clock");

clock.addEventListener("mousemove", (e) => {
  const rect = clock.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  clock.style.setProperty("--x", `${x}%`);
  clock.style.setProperty("--y", `${y}%`);
});
