const content = document.querySelector(".images-content");
const body = document.getElementsByTagName("body")[0];

window.scrollTo({top: 0, left: 0, behavior: "smooth"});
let attitudeX = body.clientWidth-content.clientWidth;
let attitudeY = body.clientHeight-content.clientHeight;

let outX = attitudeX/2;
let outY = attitudeY/2;
content.style.transform = "translate("+outX+"px ,"+outY+"px"+")";
console.log(outX, outY);

addEventListener('resize', () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    attitudeX = body.clientWidth-content.clientWidth;
    attitudeY = body.clientHeight-content.clientHeight;
})

addEventListener('mousemove', (event) => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    outX = event.clientX/window.innerWidth*(attitudeX);
    outY = event.clientY/window.innerHeight*(attitudeY);
    content.style.transform = "translate("+outX+"px ,"+outY+"px"+")";
    console.log(outX, outY);
})