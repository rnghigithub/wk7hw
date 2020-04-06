const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();

const centerX = canvas.width/2;
const centerY = canvas.height/2;

ctx.moveTo (500,150);

//one side//
ctx.lineTo(100 , 350);

//other side// 
ctx.lineTo(100 ,50);

ctx.lineWidth = 5;
ctx.strokeStyle = 'black'; 

ctx.fillStyle = 'white';
ctx.fill();