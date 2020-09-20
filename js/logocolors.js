// let colors = ['red', 'blue', 'purple', 'yellow'];
const colors = ["#f79256", "#fbd1a2", "#7dcfb6", "#00b2ca", "#1d4e89"];
let scs;
window.addEventListener("DOMContentLoaded", (event) => {
  scs = document.getElementsByClassName("logo-section");
  changeTheme();
  setInterval(changeTheme, 2500);
});

function changeTheme() {
  let section = scs[Math.floor(Math.random() * scs.length)];
  const bgColorIndex = Math.floor(Math.random() * colors.length);
  section.style.background = colors[bgColorIndex];
  if (bgColorIndex === 4) {
    section.style.color = "#fbfbf8";
  } else {
    section.style.color = "#141414";
  }
  section.style["border-radius"] = "50%";
}
