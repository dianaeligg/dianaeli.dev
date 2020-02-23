// let colors = ['red', 'blue', 'purple', 'yellow'];
let colors = ['#f79256','#fbd1a2','#7dcfb6','#00b2ca','#1d4e89'];
let scs;
window.addEventListener('DOMContentLoaded', (event) => {
    scs = document.getElementsByClassName('logo-section');
    console.log(scs);
    changeTheme();
    setInterval(changeTheme, 2500);
});

function changeTheme() {
    let section = scs[Math.floor(Math.random() * scs.length)];
    console.log(section);
    section.style.background = colors[Math.floor(Math.random() * colors.length)];
    section.style["border-radius"] = '50%';
}