
    const btn = document.querySelector("button");
    const canvas = document.querySelector("canvas");
const canv = canvas.getContext("2d");
    
    let WIDTH = document.documentElement.clientWidth;
    let HEIGHT = document.documentElement.clientHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function randomNum(number) {
      return Math.floor(Math.random()*number);
    }

    function drawCircles() {
   
      canv.clearRect(0,0,WIDTH,HEIGHT);
      for(let i = 0; i < 100; i++) {
        canv.beginPath();
        canv.fillStyle = randomColor();
        canv.arc(randomNum(WIDTH), randomNum(HEIGHT), randomNum(50), 0, 2 * Math.PI);
        canv.fill();
      }
    }

    btn.addEventListener('click', drawCircles);
    
function randomColor() {
    const redValue = randomNum(255)
    const greenValue = randomNum(255)
    const blueValue = randomNum(255)

    return `rgba(${redValue}, ${greenValue}, ${blueValue}, 0.5)`
}
    