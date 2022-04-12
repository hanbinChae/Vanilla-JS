const title = document.querySelector('.hello h1')

function handleTitleClick(){
    title.innerText = 'Grap me!!'
    console.log('title was clicked');
    title.style.color='blue';
}

function handleMouseEnter(){
    title.innerText = 'Mouse is here!!';
}

function handleMouseLeave(){
    title.innerText = 'Mouse is gone!!';
}

function handleWindowResize(){
    document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy(){
    alert('copier!')
}
function handleWindowOffline(){
    alert('SOS no Wifi');
}
function handleWindowOnline(){
    alert('all GOODD!!')
}
title.onclick = handleTitleClick;
title.addEventListener('mouseenter',handleMouseEnter);
title.addEventListener('mouseleave',handleMouseLeave)

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener('offline',handleWindowOffline);
window.addEventListener('online',handleWindowOnline);