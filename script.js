const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e){

const width = hero.offsetWidth;
const height = hero.offsetHeight;
let { offsetX: x, offsetY: y} = e;

if(this !== e.target){

  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;


}

const xWalk = Math.round((x / width * walk ) - (walk / 2));
const yWalk = Math.round((y / height * walk ) - (walk / 2));


text.style.textShadow =

 `${xWalk}px ${yWalk}px 0 rgba(0, 169, 96,0.5),
${xWalk * -2}px ${yWalk}px 0 rgba(0, 169, 96,0.7),
${xWalk}px ${yWalk * -2}px 0 rgba(0, 169, 96,0.5),
${xWalk * -2}px ${yWalk * -2}px 0 rgba(0, 169, 96,0.7)




`;



}

hero.addEventListener('mousemove', shadow);
