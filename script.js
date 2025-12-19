const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");
const html = document.documentElement;

if (localStorage.theme === "dark") {
  html.classList.add("dark");
  icon.className = "ri-sun-line text-xl";
}

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
    icon.className = "ri-sun-line text-xl";
  } else {
    localStorage.theme = "light";
    icon.className = "ri-moon-line text-xl";
  }
});

const spotify = document.getElementById("spotify");

function setSpotifyTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  spotify.src = `https://open.spotify.com/embed/playlist/2206mnD8u5SZ8b3sPxEHOg?utm_source=generator&theme=${
    isDark ? "1" : "0"
  }`;
}

setSpotifyTheme();

document
  .getElementById("themeToggle")
  .addEventListener("click", setSpotifyTheme);
