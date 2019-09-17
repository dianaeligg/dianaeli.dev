let styles = ['main', 'pixel', 'cartoon', 'neon'];

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let scs = document.getElementsByClassName('style-changer');
    for (let i = 0; i < scs.length; i++) {
        console.log( scs[i] );
        scs[i].style.background = 'blue';
        scs[i].innerHTML = styles[i];
        scs[i].addEventListener('click', () => changeTheme(styles[i]));
    }
});

function changeTheme(theme) {
    console.log(theme);
    let link = document.createElement('link');  
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = 'css/'+theme+'.css';  
    link.id = 'sc-'+theme
    let head = document.getElementsByTagName('HEAD')[0];
    if (!document.getElementById('sc-'+theme)){
        let links = document.getElementsByTagName('link');
        console.log(links);
        for (let i = 0; i < links.length; i++) {
            if(links[i].getAttribute('id'))
                document.getElementById(links[i].getAttribute('id')).remove();         
        }
        head.appendChild(link);  
    }
}