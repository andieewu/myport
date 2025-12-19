/* ----------  THEME (tetap seperti kamu punya) ---------- */
const toggle = document.getElementById("themeToggle");
const themeIcon = toggle.querySelector("i");
const html = document.documentElement;

if (localStorage.theme === "dark") {
  html.classList.add("dark");
  themeIcon.className = "ri-sun-line text-xl";
}
toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
    themeIcon.className = "ri-sun-line text-xl";
  } else {
    localStorage.theme = "light";
    themeIcon.className = "ri-moon-line text-xl";
  }
});

const spotify = document.getElementById("spotify");
function setSpotifyTheme() {
  const isDark = html.classList.contains("dark");
  spotify.src = `https://open.spotify.com/embed/playlist/2206mnD8u5SZ8b3sPxEHOg?utm_source=generator&theme=${
    isDark ? "1" : "0"
  }`;
}
setSpotifyTheme();
toggle.addEventListener("click", setSpotifyTheme);

const menuToggle = document.getElementById("menuToggle");
const menuTray = document.getElementById("menuTray");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  const open = menuTray.classList.toggle("scale-100");
  menuTray.classList.toggle("opacity-100", open);
  menuTray.classList.toggle("pointer-events-none", !open);

  menuToggle.classList.toggle("bg-gray-300", open);
  menuToggle.classList.toggle("dark:bg-gray-600", open);

  menuIcon.classList.toggle("ri-menu-line", !open);
  menuIcon.classList.toggle("ri-close-large-line", open);
});

function closeTray() {
  menuTray.classList.remove("scale-100", "opacity-100");
  menuTray.classList.add("pointer-events-none");
  menuToggle.classList.remove("bg-gray-300", "dark:bg-gray-600");
  menuIcon.classList.remove("ri-close-large-line");
  menuIcon.classList.add("ri-menu-line");
}

document.addEventListener("click", (e) => {
  if (menuToggle.contains(e.target) || menuTray.contains(e.target)) return;
  closeTray();
});

menuTray.addEventListener("click", (e) => e.stopPropagation());
