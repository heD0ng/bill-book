// Rem布局；
const baseSize = 37.5;

export function setRem(){
    const scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

setRem()

document.addEventListener('resize',()=>{
    setRem();
})