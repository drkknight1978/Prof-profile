(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Tiny nicety: set active nav link by filename (in case you duplicate templates)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-link").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
    else a.classList.remove("active");
  });
})();