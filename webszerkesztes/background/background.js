const kimenet = document.querySelector('#kimenet');

const valtozas = () => {
    let bgc = document.querySelector('#bgc').value;
    kimenet.style.backgroundColor = bgc;
    let bgi = document.querySelector('#bgi').value;
    kimenet.style.backgroundImage = `url(${bgi})`;
    let bgs = document.querySelector('#bgs').value;
    kimenet.style.backgroundSize = bgs;
    let bgr = document.querySelector('#bgr').value;
    kimenet.style.backgroundRepeat = bgr;
    let bgp = document.querySelector('#bgp').value;
    kimenet.style.backgroundPosition = bgp;
    let bgo = document.querySelector('#bgo').value;
    kimenet.style.backgroundOrigin = bgo;
    let bgcl = document.querySelector('#bgcl').value;
    kimenet.style.backgroundClip = bgcl;
};
