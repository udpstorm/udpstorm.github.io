document.addEventListener("contextmenu", e => e.preventDefault()); 
document.addEventListener("keydown", e => {
    if (e.keyCode === 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});

function animateTitle(Title,delay){
    let counter=0;
    let direction=true;
    setInterval(function(){
    if(counter==Title.length)direction=false;
    if(counter==false)direction=true;
    counter=(direction==true)?++counter:--counter;
    newtitle=(counter==0)?"_":Title.slice(0,counter);
    document.title=newtitle;
    },delay);
}
animateTitle('@udpstorm',300);