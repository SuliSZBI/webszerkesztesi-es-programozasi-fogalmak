const kimenet = document.querySelector('#kimenet');

const valtozas = () => {
    let bgc = document.querySelector('#bgc').value;
    kimenet.style.backgroundColor = bgc;
    let bgi1 = document.querySelector('#bgi1').value;
    let bgi2 = document.querySelector('#bgi2').value;
    if (bgi1 && bgi2) {
        kimenet.style.backgroundImage = `url(${bgi1}), url(${bgi2})`;
    }
    let bgs1 = document.querySelector('#bgs1').value;
    let bgs2 = document.querySelector('#bgs2').value;
    if (bgs1 && bgs2) {
        kimenet.style.backgroundSize = `${bgs1}, ${bgs2}`;
    }
    let bgr1 = document.querySelector('#bgr1').value;
    let bgr2 = document.querySelector('#bgr2').value;
    if (bgr1 && bgr2) {
        kimenet.style.backgroundRepeat = `${bgr1}, ${bgr2}`;
    }
    let bgo1 = document.querySelector('#bgo1').value;
    let bgo2 = document.querySelector('#bgo2').value;
    if (bgo1 && bgo2) {
        kimenet.style.backgroundOrigin = `${bgo1}, ${bgo2}`;
    }
    let bgcl1 = document.querySelector('#bgcl1').value;
    let bgcl2 = document.querySelector('#bgcl2').value;
    if (bgcl1 && bgcl2) {
        kimenet.style.backgroundClip = `${bgcl1}, ${bgcl2}`;
    }
};
