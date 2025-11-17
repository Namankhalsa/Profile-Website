let leftBtn = document.querySelector("#svg1");
let rightBtn = document.querySelector("#svg2");
let card = document.querySelector("#card");

let srcArr = ["/img/NAMAN1.png","/img/NAMAN2.png","/img/NAMAN3.png","/img/NAMAN4.png"];

let idx = 0;

// initially
card.style.backgroundImage = `url(${srcArr[idx]})`;
card.style.backgroundSize = 'contain';
card.style.backgroundRepeat = 'no-repeat';

rightBtn.addEventListener('click',()=>{
    if(idx == srcArr.length) idx = 0;
    card.style.backgroundImage = `url(${srcArr[idx]})`;
    card.style.backgroundSize = 'contain';
    card.style.backgroundRepeat = 'no-repeat';
    idx++;

})


leftBtn.addEventListener('click',()=>{
    if(idx == -1) idx = srcArr.length-1;
    card.style.backgroundImage = `url(${srcArr[idx]})`;
    card.style.backgroundSize = 'contain';
    card.style.backgroundRepeat = 'no-repeat';
    idx--;
})