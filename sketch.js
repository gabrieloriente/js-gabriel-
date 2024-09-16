function setup() {
    createCanvas(1200, 1000);
    background("#2196F3")
  }
  
  function draw() {
    stroke("#E91E63");
    fill("#4CAF50");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  