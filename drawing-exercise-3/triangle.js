const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();

const centerX = canvas.width/2;
const centerY = canvas.height/2;

ctx.moveTo (10,20);
ctx.lineTo(CenterY - 50 ,centerX + 5);
//one side//

ctx.lineTo(centerX + 10 ,centerY - 10);
//other side//

ctx.fill();