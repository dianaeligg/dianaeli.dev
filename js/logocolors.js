// let colors = ['red', 'blue', 'purple', 'yellow'];
let colors = ['#f79256','#fbd1a2','#7dcfb6','#00b2ca','#1d4e89'];
let scs;
window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    // let scs = document.getElementsByClassName('logo-section');
    // for (let i = 0; i < scs.length; i++) {
    //     console.log( scs[i] );
    //     // scs[i].style.background = 'blue';
    //     // scs[i].innerHTML = styles[i];
    //     scs[i].addEventListener('mouseenter', () => changeTheme(scs[i]));
    // }
    scs = document.getElementsByClassName('logo-section');
    changeTheme();
    setInterval(changeTheme, 2500);
});

function changeTheme() {
    let section = scs[Math.floor(Math.random() * scs.length)];
    console.log(section);
    section.style.background = colors[Math.floor(Math.random() * colors.length)];
    section.style["border-radius"] = '50%';
    // let link = document.createElement('link');  
    // link.rel = 'stylesheet';  
    // link.type = 'text/css'; 
    // link.href = 'css/'+theme+'.css';  
    // link.id = 'sc-'+theme
    // let head = document.getElementsByTagName('HEAD')[0];
    // if (!document.getElementById('sc-'+theme)){
    //     let links = document.getElementsByTagName('link');
    //     console.log(links);
    //     for (let i = 0; i < links.length; i++) {
    //         if(links[i].getAttribute('id'))
    //             document.getElementById(links[i].getAttribute('id')).remove();         
    //     }
    //     head.appendChild(link);  
    // }
}