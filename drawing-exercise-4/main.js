function draw() {};

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

if (canvas.getContext) {
    ctx = canvas.getContext('2d');
 } else{
    const para = document.getElementById('unsupported');
    para.textContent = 'Browser does not support HTML5 Canvas'
 }

 var centerX = canvas.width/2;
 var centerY = canvas.width/2;

 ctx.fillStyle (252,101,2);
 ctx.fillRect (300,200);
 ctx.clearRect (200,180);
 ctx.strokeRect (315,215);

