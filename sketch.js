function setup() {
    createCanvas(800, 700);
    background("#2196F3")
  }
  
  function draw() {
    stroke("#E91E63");
    fill("#4CAF50");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  