const draw = document.getElementById('draw');
let ctx = draw.getContext('2d');

// ctx.beginPath();
// ctx.lineWidth = "2";
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(50, 75);
// ctx.lineTo(75, 50);


// ctx.lineWidth = "2";
// ctx.moveTo(50, 60);
// ctx.lineTo(100, 60);
// ctx.lineTo(75, 90);
// ctx.lineTo(50, 60);
// ctx.fillStyle = 'red'
// ctx.fill()
// ctx.closePath();

// const drawCloud = (x, y) => {
//     c.beginPath();
//     c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
//     c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
//     c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
//     c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
//     c.moveTo(x + 200, y + 60);
//     c.lineTo(x, y + 60);
//     c.strokeStyle = '#797874';
//     c.stroke();
//     c.fillStyle = '#8ED6FF';
//     c.fill()
// }
// drawCloud(100, 135);


// c.beginPath();
// c.arc(50, 150, 20, Math.PI * 0.5, Math.PI * 1.5)
// c.arc(90, 130, 30, Math.PI * 1, Math.PI * 1.85)

// c.stroke()
// c.fill()


// const drawimg = () => {
//     const draw = document.getElementById('draw');
//     let ctx = draw.getContext('2d');
//     let img = new Image()
//     img.onload = function () {
//         ctx.drawImage(img, 0, 0, img.width = 980 / 20, img.height = 686 / 20);

//         ctx.mozImageSmoothingEnabled = false;
//         ctx.webkitImageSmoothingEnabled = false;
//         ctx.msImageSmoothingEnabled = false;
//         ctx.imageSmoothingEnabled = false;
//     }
//     img.src = './svg/cloud-solid.svg'

// }

// drawimg()

draw.height = 600
draw.style.width = '100vw'
let x = 0;
let y = 0;
let x2 = 50;
let y2 = 108;
let v = 0.2

let x3 = 150
let y3 = 300

let x4 = -30
let y4 = 430
function animCloud() {

    requestAnimationFrame(animCloud)


    function animation() {


        ctx.clearRect(0, 0, draw.width, draw.height)
        ctx.clearRect(0, 0, draw.height, draw.width);
        ctx.beginPath();
        ctx.arc(30 + x, 50 + y, 20, Math.PI, 1.5 * Math.PI, false);
        ctx.arc(50 + x, 31 + y, 20, Math.PI, 0 * Math.PI);
        ctx.arc(70 + x, 51 + y, 19, 1.5 * Math.PI, 0 * Math.PI);
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(30 + x, 50 + y, 20, 1 * Math.PI, 0.5 * Math.PI, true);
        // ctx.moveTo(30 + x, 70 + y);
        // ctx.lineTo(70 + x, 70 + y);
        ctx.arc(69 + x, 50 + y, 20, 0.5 * Math.PI, 0 * Math.PI, true)
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 4
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
        ctx.lineWidth = '2'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'

        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        x += v

        if (x + 20 > draw.width) {
            x = -100
        }

        //deuxième nuage 
        ctx.beginPath();
        ctx.arc(30 + x2, 50 + y2, 20, Math.PI, 1.5 * Math.PI, false);
        ctx.arc(50 + x2, 31 + y2, 20, Math.PI, 0 * Math.PI);
        ctx.arc(70 + x2, 51 + y2, 19, 1.5 * Math.PI, 0 * Math.PI);
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(30 + x2, 50 + y2, 20, 1 * Math.PI, 0.5 * Math.PI, true);
        // ctx.moveTo(30 + x2, 70 + y2);
        // ctx.lineTo(70 + x2, 70 + y2);
        ctx.arc(69 + x2, 50 + y2, 20, 0.5 * Math.PI, 0 * Math.PI, true)
        ctx.lineWidth = '2'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        x2 += v
        if (x2 + 20 > draw.width) {
            x2 = -100
        }

        ctx.beginPath();
        ctx.arc(30 + x3, 50 + y3, 20, Math.PI, 1.5 * Math.PI, false);
        ctx.arc(50 + x3, 31 + y3, 20, Math.PI, 0 * Math.PI);
        ctx.arc(70 + x3, 51 + y3, 19, 1.5 * Math.PI, 0 * Math.PI);
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(30 + x3, 50 + y3, 20, 1 * Math.PI, 0.5 * Math.PI, true);
        // ctx.moveTo(30 + x2, 70 + y2);
        // ctx.lineTo(70 + x2, 70 + y2);
        ctx.arc(69 + x3, 50 + y3, 20, 0.5 * Math.PI, 0 * Math.PI, true)
        ctx.lineWidth = '2'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        x3 += v
        if (x3 + 20 > draw.width) {
            x3 = -100
        }



        ctx.beginPath();
        ctx.arc(30 + x4, 50 + y4, 20, Math.PI, 1.5 * Math.PI, false);
        ctx.arc(50 + x4, 31 + y4, 20, Math.PI, 0 * Math.PI);
        ctx.arc(70 + x4, 51 + y4, 19, 1.5 * Math.PI, 0 * Math.PI);
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(30 + x4, 50 + y4, 20, 1 * Math.PI, 0.5 * Math.PI, true);
        // ctx.moveTo(30 + x2, 70 + y2);
        // ctx.lineTo(70 + x2, 70 + y2);
        ctx.arc(69 + x4, 50 + y4, 20, 0.5 * Math.PI, 0 * Math.PI, true)
        ctx.lineWidth = '2'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        x4 += v
        if (x4 + 20 > draw.width) {
            x4 = -100
        }


    }
    animation()

}
animCloud();



// deuxième partie animation 













