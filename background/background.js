const kimenet = document.querySelector('#kimenet');

const valtozas = () => {
    let bgc = document.querySelector('#bgc').value;
    kimenet.style.backgroundColor = bgc;
    let bgi = document.querySelector('#bgi').value;
    kimenet.style.backgroundImage = `url(${bgi})`;
    let bgr = document.querySelector('#bgr').value;
    kimenet.style.backgroundRepeat = bgr;
    let bgo = document.querySelector('#bgo').value;
    kimenet.style.backgroundOrigin = bgo;
    let bgcl = document.querySelector('#bgcl').value;
    kimenet.style.backgroundClip = bgcl;
};
