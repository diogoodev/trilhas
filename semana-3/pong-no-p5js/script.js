import p5js from 'p5';

const sketch = (p5) => {
    let x = 0;
    let y = 0;
    let speedX = 5;
    let speedY = 5;
    let score = 0;
    
    p5.setup = () => {
        p5.createCanvas(800, 400);
        x = p5.width / 2;
        y = p5.height / 2;
    };
    
    p5.draw = () => {
        p5.background(0);
        p5.fill(255);
        p5.ellipse(x, y, 50, 50);
    
        x += speedX;
        y += speedY;
    
        if (x > p5.width || x < 0) {
        speedX *= -1;
        }
    
        if (y > p5.height || y < 0) {
        speedY *= -1;
        }
    
        if (y > p5.height) {
        score = 0;
        }
    
        p5.textSize(32);
        p5.text(`Score: ${score}`, 10, 30);
    
        if (p5.mouseIsPressed && p5.dist(p5.mouseX, p5.mouseY, x, y) < 25) {
        speedX *= -1;
        speedY *= -1;
        score++;
        }
    };
    }